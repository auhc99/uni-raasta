import React from 'react';

const SocietyClubPage = () => {
    return (
        <div>
            <header>
                <h1>Societies and Clubs</h1>
            </header>

            <section id="societies">
                <h2>Societies</h2>
                <ul>
                    <SocietyItem name="Society 1" description="Description of Society 1." />
                    <SocietyItem name="Society 2" description="Description of Society 2." />
                    {/* Add more societies as needed */}
                </ul>
            </section>

            <section id="clubs">
                <h2>Clubs</h2>
                <ul>
                    <ClubItem name="Club 1" description="Description of Club 1." />
                    <ClubItem name="Club 2" description="Description of Club 2." />
                    {/* Add more clubs as needed */}
                </ul>
            </section>
        </div>
    );
};

const SocietyItem = ({ name, description }) => (
    <li>
        <h3>{name}</h3>
        <p>{description}</p>
    </li>
);

const ClubItem = ({ name, description }) => (
    <li>
        <h3>{name}</h3>
        <p>{description}</p>
    </li>
);

export default SocietyClubPage;
