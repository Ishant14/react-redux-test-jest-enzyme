import React from 'react';

class Headline extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        const { header, desc } = this.props; 

        if (!header) {
            return null;
        }

        return(
            <div>
                <h1>{header}</h1>
                <p>
                    {desc}
                </p>

            </div>
        );
    }
}

export default Headline;