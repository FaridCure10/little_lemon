import { lazy, Suspense } from "react";

import ConfirmedBooking from "../../molecules/confirmed-booking/ConfirmedBooking";
const Header = lazy(() => import('../../organisms/header/Header'));

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Header showMenu={false} />
            <ConfirmedBooking />
        </Suspense>
    )
}