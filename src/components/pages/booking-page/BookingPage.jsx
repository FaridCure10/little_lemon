import { lazy, Suspense } from "react";

const Header = lazy(() => import('../../organisms/header/Header'));
const BookingForm = lazy(() => import( "../../molecules/booking-form/BookingForm"));


// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Header showMenu={false} />
                <BookingForm />
            </Suspense>
        </>
    )
}