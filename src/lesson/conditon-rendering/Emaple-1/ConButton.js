import React from 'react';

class ConButton extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocale } = this.props;
        const { change: nextChange, locale: nextLocale } = nextProps;
        if (currentChange === nextChange && nextLocale === currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale } = this.props;
        return (
            <>
                <button type="button" onClick={() => change(locale)}>
                    {/* Click Here */}
                    {locale ==='bn-BD'? "Change Clock to Bangla":"Change Clock to English"}
                </button>
            </>
        );
    }
}

export default ConButton;