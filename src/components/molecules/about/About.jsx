import './About.scss'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return (
        <section id="About">
            <div className='About_container-img'>
                <img src="https://cdn.pixabay.com/photo/2020/06/30/15/03/table-5356682_1280.jpg" alt="creditos pixabay" />
            </div>
            <div className='About_container-p'>
                <h3>Nam auctor tortor tristique ante malesuada gravida</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut consectetur justo. 
                    Proin ullamcorper vestibulum enim non malesuada. Vivamus sit amet eros ligula. Suspendisse 
                    semper et mauris nec volutpat. Aenean eleifend auctor tincidunt. Donec elit urna, tempor quis 
                    suscipit vitae, eleifend ut nisi. In mollis lectus nulla, vitae luctus est scelerisque fermentum. 
                    Integer sed aliquam nisl, a tristique arcu. Donec ac vehicula metus. Maecenas elementum mauris augue, 
                    nec aliquam urna accumsan at. Suspendisse porttitor mollis pellentesque. Nulla lobortis lorem in 
                    velit fermentum pharetra. Praesent ligula nisi, pharetra eu vehicula dapibus, fringilla id odio.
                </p>
                <p>Curabitur tempor, erat fermentum luctus sagittis, urna tellus ullamcorper lorem, sed posuere enim 
                    tortor quis arcu. Proin dignissim congue turpis, eu hendrerit nunc tristique sed. Suspendisse 
                    consectetur mollis mauris vitae congue. Cras ultrices hendrerit lobortis. Curabitur viverra nulla 
                    tortor, vel lacinia neque tincidunt et. In facilisis magna ac tortor tristique, eleifend fermentum 
                    orci efficitur. Vivamus nibh justo, fringilla id pharetra vitae, suscipit a ligula. Donec ut magna 
                    et est cursus congue. Mauris volutpat venenatis dignissim. Phasellus nibh mi, posuere in tortor eu, 
                    iaculis sodales ipsum.
                </p>
            </div>
        </section>
    )
}