import Link from "next/link";

export default function PaymentFailure(){

    return(
        <>
        <h3 className="my-2 text-danger"><i className="fa fa-check-circle"></i>Error! Something wrong happened</h3>
        <h5 className="text-danger">Error Payment Unsuccessful</h5>
        <p>
            <Link href="/" className="btn btn-dark">Home</Link>
            <Link href="#" className="btn btn-warning text-light ms-2">My Dashboard</Link>
        </p>
        </>
    );
}