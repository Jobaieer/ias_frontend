import Link from "next/link";

export default function Page(){
    return(
        <section className="container my-5">
            <h3 className="text-center my-4">Room Types (6)</h3>
            <div className="row text-center">
                <div className="col-4">
                    <div className="card">
                    <Link href='/room-types/deluxe-room'>
                        <img src="/rooms/d.jpg" class="card-img-top" alt="Room Types Single" />
                    </Link>
                        <div className="card-body ias-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types/deluxe-room' className="text-warning">Deluxe Room</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                    <Link href='/room-types/deluxe-room'>
                        <img src="/rooms/dd.jpg" class="card-img-top" alt="Room Types Dual" />
                    </Link>
                        <div className="card-body ias-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types/dual-room' className="text-warning">Dual Room</Link>
                            </h5>
                        </div>
                    </div>
                </div>

                <div className="col-4 mb-3">
                    <div className="card">
                    <Link href='/room-types/deluxe-room'>
                        <img src="/rooms/kq.jpg" class="card-img-top" alt="Room Types KQ" />
                    </Link>
                        <div className="card-body ias-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types/kq-room' className="text-warning">KQ Room</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-4 mb-3">
                    <div className="card">
                    <Link href='/room-types/deluxe-room'>
                        <img src="/rooms/q.jpg" class="card-img-top" alt="Room Types Quad " />
                    </Link>
                        <div className="card-body ias-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types/quad-room' className="text-warning">Quad Room</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4 mb-3">
                    <div className="card">
                    <Link href='/room-types/deluxe-room'>
                        <img src="/rooms/sd.jpg" class="card-img-top" alt="Room Types Super-Dual" />
                    </Link>
                        <div className="card-body ias-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types/super-dual-room' className="text-warning">Super-Dual Room</Link>
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card">
                    <Link href='/room-types/deluxe-room'>
                        <img src="/rooms/p.jpg" class="card-img-top" alt="Room Types Presidential Suite" />
                    </Link>
                        <div className="card-body ias-bg-dark text-white">
                            <h5 className="card-title">
                                <Link href='/room-types/presidential-suite' className="text-warning">Presidential Suite</Link>
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}