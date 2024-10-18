import React from 'react';

const Header = ({ updateTheme, refresh }) => {
    return (
        <header className="fixed responsive max surface">
            <nav>
                <div className="field prefix fill round max">
                    <i>search</i>
                    <input type="search" />
                </div>
                <button className="transparent circle" onClick={updateTheme}>
                    <i id="dark" style={{ display: 'none' }}>light_mode</i>
                    <i id="light">dark_mode</i>
                </button>
                <button className="transparent circle m l" onClick={refresh}>
                    <i>refresh</i>
                </button>
            </nav>
            <nav className="no-margin scroll">
                <button className="chip fill">Rock</button>
                <button className="chip fill">Pop</button>
                <button className="chip fill">Maneskin</button>
                <button className="chip fill">Bad Bunny</button>
                <button className="chip fill">Zoe</button>
            </nav>
        </header>
    );
};

export default Header;
