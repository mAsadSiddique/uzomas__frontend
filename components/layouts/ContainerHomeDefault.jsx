import React from 'react';
import Head from 'next/head';
import FooterFullwidth from '~/components/shared/footers/FooterFullwidth';
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import HeaderMobile from '~/components/shared/headers/HeaderMobile';
import NavigationList from '~/components/shared/navigation/NavigationList';

const ContainerHomeDefault = ({ children, title }) => {
    let titleView;
    if (title !== null) {
        titleView = 'Luxury Ledger Market' + ' | ' + title;
    } else {
        titleView = 'Luxury Ledger Market' + ' | ' + 'A Market Place';
    }

    return (
        <div className="martfury">
            <Head>
                <title>{titleView}</title>
            </Head>
            <HeaderDefault />
            <HeaderMobile />
            <NavigationList />
            <main id="homepage-1">{children}</main>
            <FooterFullwidth />
            {/*<SwicherDemo />
            <SubscribePopup active={subscribe} />*/}
        </div>
    );
};

export default ContainerHomeDefault;
