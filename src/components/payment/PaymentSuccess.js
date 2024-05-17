import Link from "next/link";

export default function PaymentSuccess(){

    return(
        <>
        <h3 className="my-2 text-success"><i className="fa fa-check-circle"></i>Thank you for Payment</h3>
        <h5>Invoice: <Link href="#">IAS-0001</Link></h5>
        <p>
            <Link href="#" className="btn btn-dark">Home</Link>
            <Link href="#" className="btn btn-warning text-light ms-2">My Dashboard</Link>
        </p>
        </>
    );
}