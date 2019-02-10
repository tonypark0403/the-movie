import React from 'react';
import DetailPresenter from './DetailPresenter.js'
import { URL } from 'Common/Constants';
import { movieApi, tvApi } from '../../Common/api.js';

export default class extends React.Component {
    constructor(props) {
        super(props);
        const { 
            location: { pathname } 
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes(URL.MOVIE)
        };
    }


    async componentDidMount() {
        const {
            match: {
                params: {
                    id
                }
            },
            history: { push }
        } = this.props;
        const { isMovie } = this.state;
        const parsedId = parseInt(id);
        if (isNaN(parsedId)) {
            return push("/");
        }
        let result = null;
        try {
            if(isMovie) {
                const request = await movieApi.movieDetail(parsedId);
                result = request.data;
            } else {
                const request = await tvApi.showDetail(parsedId);
                result = request.data;
            }
            // console.log(result);
        } catch {
            this.setState({
                error: "Can't find anything."
            })
        } finally {
            this.setState({
                loading: false,
                result
            })
        }

    }

    render() {
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            />
        )
    }
}