import React from 'react';
import SearchPresenter from './SearchPresenter.js'
import { movieApi, tvApi } from '../../Common/api.js';

export default class extends React.Component {
    state = {
        movieResults: null,
        tvResults: null,
        loading: false,
        error: null,
        searchTerm: ""
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if(searchTerm !== "") {
            this.searchByTerm();
        }
    }

    updateTerm = event => {
        const { 
            target: { value } 
        } = event;
        // console.log(value);
        this.setState({
            searchTerm: value
        });
    }

    searchByTerm = async () => {
        const { searchTerm } = this.state;
        this.setState({
            loading: true
        })
        try {
            const {
                data: { results: movieResults }
             } = await movieApi.search(searchTerm);
            const {
                data: { results: tvResults }
            } = await tvApi.search(searchTerm);
            this.setState({
                movieResults,
                tvResults
            })
        } catch {
            this.setState({
                error: "Can't find results."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                loading={loading}
                error={error}
                searchTerm={searchTerm}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        )
    }
}