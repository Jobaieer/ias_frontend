import RoomImages from "@/components/RoomImages";
import Link from "next/link";

export default function Page() {
    return (
        <section className="container my-5">
            <h3 className="my-4">Dual Room</h3>
            <div className="row">
                <div className="col-6">
                    <RoomImages />
                    <h4 className="my-3">Amenities</h4>
                    <div className="row">
                        <div className="col-10">
                            <p>Wifi <i className="fa fa-check-circle text-success"></i></p>
                            <p>Buffet <i className="fa fa-check-circle text-success"></i></p>
                            <p>Gym <i className="fa fa-check-circle text-success"></i></p>
                            <p>Swimming Pool <i className="fa fa-check-circle text-success"></i></p>
                            <p>Secured Parking Space <i className="fa fa-check-circle text-success"></i></p>
                        </div>
                    </div>

                    <h4 className="my-3">Location</h4>
                        <p>Marked-Map <i class="fa fa-map-marker" aria-hidden="true"></i></p>
                        <p>Street-View <i class="fa fa-street-view" aria-hidden="true"></i></p>
                </div>
                
                <div className="col-6">
                    <div className="card">
                        <h5 className="card-header text-center ias-bg-dark text-light"><h6 className="ias-color-light">☀️SUN-PLACE</h6>Booking Form</h5>
                        <div className="card-body">
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"><b>Room Types:</b> Deluxe Room</label>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"><b>Room Charge:</b> $50/Night</label>
                        </div>
                        <hr />
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"><b>No of Guests: </b></label>
                            <input className="from-control" type="number"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"><b>Check-In: </b></label>
                            <input className="from-control" type="date"/>
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" class="form-label"><b>Check-Out: </b></label>
                            <input className="from-control" type="date"/>
                        </div>
                        <Link href="/checkout" className="btn btn-primary ias-bg-normal text-warning text-center mt-2">Booking Confirm</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}