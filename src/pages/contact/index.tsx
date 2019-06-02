import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

function encode(data): string {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&');
}
interface ContactFormState {
    isValidated: boolean;
    errors: {
        input: string;
        message: string;
    }[];
    values: {
        name: string;
        value: string;
    }[];
}

export default class Index extends React.Component<{}, ContactFormState> {
    public constructor(props) {
        super(props);
        this.state = {
            isValidated: false,
            errors: [],
            values: [],
        };
    }

    private handleChange = (e): void => {
        let { values } = this.state;
        let current = values.findIndex(
            (item): boolean => {
                return item.name === e.target.name;
            },
        );

        if (current !== -1) {
            values[current].value = e.target.value;
            this.setState({ values });
        } else {
            this.setState({ values: [...values, { name: e.target.name, value: e.target.value }] });
        }
    };

    private handleSubmit = (e): void => {
        e.preventDefault();
        let errors = [];
        for (let { name, value } of this.state.values) {
            switch (name) {
                case 'name':
                    if (typeof value !== 'string') {
                        errors.push({ input: name, message: 'Please specify a name. Let me know what you by!' });
                    } else if (value.length < 2) {
                        errors.push({ input: name, message: 'A full name please...' });
                    }
                    continue;
                case 'email':
                    if (typeof value !== 'string') {
                        errors.push({ input: name, message: 'Please specify an email. How else could I respond?' });
                    } else if (
                        !value.match(
                            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                        )
                    ) {
                        errors.push({ input: name, message: 'A valid email please...' });
                    }
                    continue;
                case 'message':
                    if (typeof value !== 'string') {
                        errors.push({ input: name, message: 'Please specify a message.' });
                    }
                    continue;
            }
        }
        if (errors.length > 0) {
            this.setState({ errors });
            return;
        }
        const form = e.target;
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(error));
    };

    public render(): JSX.Element {
        return (
            <Layout>
                <section className="flex-1 mt-24 pt-6">
                    <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="contact-form flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
                            <h1>Contact</h1>
                            <form
                                name="contact"
                                method="post"
                                action="/contact/thanks/"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={this.handleSubmit}
                                className={`form${this.state.isValidated ? ' validated' : ''}`}
                            >
                                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                <input type="hidden" name="form-name" value="contact" />
                                <div hidden>
                                    <label>
                                        Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                                    </label>
                                </div>
                                <div className="form-section">
                                    <div className="form-item w-1/2">
                                        <label className="" htmlFor={'name'}>
                                            Name
                                        </label>

                                        <input
                                            className="block w-full rounded p-2 border-white bg-alpha-20 border outline-none focus:shadow-outline"
                                            type={'text'}
                                            name={'name'}
                                            onChange={this.handleChange}
                                            id={'name'}
                                            required={true}
                                        />
                                    </div>
                                    <div className="form-item w-1/2">
                                        <label className="label" htmlFor={'email'}>
                                            Email
                                        </label>
                                        <input
                                            className="block w-full rounded p-2"
                                            type={'email'}
                                            name={'email'}
                                            onChange={this.handleChange}
                                            id={'email'}
                                            required={true}
                                        />
                                    </div>
                                    <div className="form-item w-full">
                                        <label className="label" htmlFor={'message'}>
                                            Message
                                        </label>
                                        <div className="control">
                                            <textarea
                                                className="w-full block resize-y"
                                                style={{ minHeight: '12rem' }}
                                                name={'message'}
                                                onChange={this.handleChange}
                                                id={'message'}
                                                required={true}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <button
                                        type="submit"
                                        className="mx-auto inline-block lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg"
                                    >
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-3/5 py-3 text-center" />
                    </div>
                </section>
            </Layout>
        );
    }
}
