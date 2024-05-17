import Link from "next/link";


export default function Page() {

    return (
        <section className="container my-5">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <img src="/thumbs/f.jpg" className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-12">
                            <h3 className="mb-3">Forget Password</h3>
                                <div class="col-md-6 col-12 mb-3">
                                    <label for="inputEmail4" class="form-label">Email</label>
                                    <input type="email" class="form-control" placeholder="Email" />
                                    
                                </div>
                                <div class="col-12 mb-3">
                                <button className="btn btn-warning text-white">Submit</button>
                                </div>
                                <p>If you have no registered account, <Link href="/user/signup">Signup here</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    );
}