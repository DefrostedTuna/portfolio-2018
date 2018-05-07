import Errors from "./Errors.js";

class Form
{
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    /**
     * Fetch all relevant data for the form.
     */
    data() {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    /**
     * Reset the form fields.
     */
    reset() {
        for (let field in this.originalData) {
            this[field] = this.originalData[field];
        }

        this.errors.clear();
    }

    /**
     * Clear the form fields.
     */
    clear() {
        for (let field in this.originalData) {
            this[field] = null;
        }

        this.errors.clear();
    }

    /**
     * Send a GET request to the given URL.
     *
     * @param {string} url
     * @param {object} config
     */
    get(url, config) {
        return this.submit('get', url, config);
    }

    /**
     * Send a POST request to the given URL.
     *
     * @param {string} url
     * @param {object} config
     */
    post(url, config) {
        return this.submit('post', url, config);
    }

    /**
     * Send a PUT request to the given URL.
     *
     * @param {string} url
     * @param {object} config
     */
    put(url, config) {
        return this.submit('put', url, config);
    }

    /**
     * Send a PATCH request to the given URL.
     *
     * @param {string} url
     * @param {object} config
     */
    patch(url, config) {
        return this.submit('patch', url, config);
    }

    /**
     * Send a DELETE request to the given URL.
     *
     * @param {string} url
     * @param {object} config
     */
    delete(url, config) {
        return this.submit('delete', url, config);
    }

    /**
     * Submit the form.
     *
     * @param {string} requestType
     * @param {string} url
     * @param {object} config
     */
    submit(requestType, url, config) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data(), config)
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data);
                });
        });
    }

    /**
     * Handle a successful form submission.
     *
     * @param {object} data
     */
    onSuccess(data) {
        this.reset();
    }

    /**
     * Handle a failed form submission.
     *
     * @param {object} errors
     */
    onFail(errors) {
        this.errors.record(errors.errors);
    }
}

export default Form;