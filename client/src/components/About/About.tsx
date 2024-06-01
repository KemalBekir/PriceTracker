import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <div className="flex flex-wrap">
        <div className="w-full md:w-2/3 mb-4 md:mb-0">
          <p className="text-lg mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et neque
            eu augue iaculis commodo non eget elit. Sed lacinia consequat ante id
            lobortis. Nullam rhoncus mauris at leo ullamcorper, ac gravida nunc
            pulvinar. Sed id finibus tortor. Aliquam maximus purus eget eros
            consequat, vitae sollicitudin nulla efficitur. Fusce ultrices posuere
            eros nec rutrum. In id mauris risus. Fusce rhoncus, nunc eu lacinia
            venenatis, leo nisi ultricies enim, at semper lacus ligula non urna.
            Suspendisse sit amet metus pretium, eleifend lacus sed, condimentum
            odio.
          </p>
          <p className="text-lg mb-4">
            Sed sagittis sollicitudin lacus, ut aliquet orci maximus eu. Suspendisse
            potenti. Vestibulum at mauris nec dolor sagittis commodo sed ac nisl.
            Aliquam erat volutpat. Donec pellentesque, nisl et rhoncus commodo, sem
            nisl vulputate enim, in sollicitudin metus ante non tortor. Donec vel
            turpis sed nunc malesuada fringilla. Fusce sed pulvinar est.
          </p>
          <p className="text-lg mb-4">
            Praesent auctor nibh quis ipsum varius, et feugiat enim posuere.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
            cubilia curae; Aliquam sit amet vehicula lectus. Suspendisse semper
            malesuada urna, id elementum mi condimentum sit amet. Proin facilisis,
            sapien vitae fringilla ullamcorper, nisl velit convallis lectus, vitae
            consectetur mauris tortor id tortor. In aliquam semper tellus, eu
            condimentum mauris cursus non. Aenean in consectetur nunc. In eget
            mauris vitae velit laoreet lacinia. Mauris elementum, arcu in dapibus
            feugiat, dui sem placerat ligula, vitae tempor sapien tellus at justo.
          </p>
        </div>
        <div className="w-full md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1609334761848-77b4d1994040?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            alt="About Us"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
