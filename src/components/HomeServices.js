import Link from "next/link";
export default function HomeServices() {
    return (
        <section className="container my-5">
            <h3 className="my-5 text-center">Services</h3>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/t-1.jpg" class="card-img-top" alt="Room Types" />
                        <div className="card-body ias-bg-dark text-white">
                            <h5 className="card-title"><Link href='/room-types' className="text-warning">Room Types</Link></h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/t-2.jpg" class="card-img-top" alt="Online Booking" />
                        <div className="card-body ias-bg-dark text-white">
                            <h5 className="card-title text-warning">Online Booking</h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                        <img src="thumbs/t-3.jpg" class="card-img-top" alt="Events" />
                        <div className="card-body ias-bg-dark text-white">
                            <h5 className="card-title text-warning">Events Booking</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}