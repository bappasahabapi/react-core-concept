import React from 'react';
import CRButton from './CRButton';


class ConditionalRending2 extends React.Component {
    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }


    render() {
        const { date, locale } = this.state;

        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>
                {/* todo:1 */}
                {locale === "bn-BD" ?
                    (
                        <CRButton
                            change={this.handleClick}
                            locale="en-US"
                        >
                        </CRButton>
                    )
                    : (<CRButton
                        change={this.handleClick}
                        locale="bn-BD"
                    >
                    </CRButton>)
                }
            </div>
        );
    }
}

export default ConditionalRending2;