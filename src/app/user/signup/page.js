import Link from "next/link";

export default function Page() {

    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img src="/thumbs/s.jpg" className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-12">
                            <h3 className="mb-3">Sign Up</h3>
                            <div class="row">
                                <div class="col-md-6 col-12 mb-3">
                                    <label for="inputEmail4" class="form-label">First Name</label>
                                    <input type="text" class="form-control" placeholder="First name" />
                                    
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                    <label for="inputEmail4" class="form-label">Last Name</label>
                                    <input type="text" class="form-control" placeholder="Last name" />
                                    
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                    <label for="inputEmail4" class="form-label">Username</label>
                                    <input type="text" class="form-control" placeholder="Username" />
                                    
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                    <label for="inputEmail4" class="form-label">Password</label>
                                    <input type="password" class="form-control" placeholder="**********" />
                                    
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                    <label for="inputEmail4" class="form-label">Cell No</label>
                                    <input type="number" class="form-control" placeholder="Cell No" />
                                    
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="example@mail.com" />
                                    
                                </div>
                                <div class="col-md-6 col-12 mb-3">
                                <button className="btn btn-secondary">Reset</button>
                                <button className="btn btn-warning text-white ms-2">Submit</button>
                                </div>
                                <p>If you have already an account, <Link href="/user/login">Login here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}