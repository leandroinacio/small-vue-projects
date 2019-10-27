var app = new Vue({
  el: '#app',
  mounted() {

    // Fetch for the currencies only if they are not already stored on localstorage
    if (localStorage.getItem('currencies')) {
      this.currencies = JSON.parse(localStorage.getItem('currencies'));
      return;
    }

    axios.get('https://free.currconv.com/api/v7/currencies?apiKey=sample-key-do-not-use')
    .then((response) => {
      localStorage.setItem('currencies', JSON.stringify(response.data.results));
      this.currencies = response.data.results;
    });
  },
  data: {
    fromCurrency: '',
    toCurrency: '',
    amount: 0.00,
    converted: 0.00,
    currencies: '',
    loading: false
  },
  computed: {
    computedCurrencies() {
      return Object.values(this.currencies);
    },
    disableConversion() {
      return (parseInt(this.amount) <= 0) || !this.fromCurrency.length || !this.toCurrency.length;
    }
  },
  methods: {

    // Fetch for conversion rate and calculate result
    convert() {
      this.loading = true;
      axios.get(`https://free.currconv.com/api/v7/convert?q=${this.fromCurrency}_${this.toCurrency}&compact=ultra&apiKey=da0d3e8afe26072138fc`)
      .then((response) => {
        this.loading = false;
        this.converted = (parseInt(this.amount) * response.data[`${this.fromCurrency}_${this.toCurrency}`]).toFixed(2);
      });
    }
  }
});