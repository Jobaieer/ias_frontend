import Link from "next/link";

export default function Page() {
    return (
        <section className="container my-5">
            <div className="card">
                <div className="card-header text-center ias-bg-dark text-light">
                <h6>☀️SUN-PLACE</h6>
                <h5>Check-Out</h5>
                </div>
            
            </div>
            <div className="row">
                <div className="col-8 offset-3">
                </div>
                <table className="table table-bordered">
                    <tbody>
                        <tr>
                            <th>Total Guest</th>
                            <td>8</td>
                        </tr>
                        <tr>
                            <th>Total Rooms</th>
                            <td>2</td>
                        </tr>
                        <tr>
                            <th>Check-In Date</th>
                            <td>28/12/2023</td>
                        </tr>
                        <tr>
                            <th>Check-Out Date</th>
                            <td>02/01/2024</td>
                        </tr>
                        <tr>
                            <th>Charges</th>
                            <td>$50X6.0days = 300.00$</td>
                        </tr>
                        <tr>
                            <th>VAT</th>
                            <td>10%</td>
                        </tr>
                        <tr>
                            <th>Discount</th>
                            <td>----</td>
                        </tr>
                        <tr>
                            <th>Total Pay</th>
                            <td>300+30 = 330.00$</td>
                        </tr>
                        <tr>
                            <td colSpan={2} className="text-danger">
                               *Require on check-in, Local - NID. Foreigner - Passport/ID
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <Link href="#">Terms & Condition</Link>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button className="btn btn-danger">Cancel</button>
                                <Link href="/payment/success" className="btn btn-success ms-2">Pay Now (success)</Link>
                                <Link href="/payment/failure" className="btn btn-danger ms-2">Pay Now (Failure)</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}