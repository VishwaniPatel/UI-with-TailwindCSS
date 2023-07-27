export default function Card() {
  return (
    <div className=" mx-auto max-w-7xl px-2 sm:px-6 py-4 lg:px-8 shadow-md flex dark:bg-dark-secondary mb-4">
      <div className="h-[16rem] w-1/3 bg-cover bg-center rounded-md me-4 overflow-hidden">
        <img
          className="h-full w-full"
          src="https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/07_jul/21_fri/img_1689930448868_503.jpg?"
        ></img>
      </div>
      <div className="w-2/3">
        <h3 className="text-2xl font-semibold dark:text-white">
          India signs agreement to launch UPI in Sri Lanka
        </h3>
        <h3 className="text-sm dark:text-white">
          <span className="font-bold">short by</span> Shalini Ojha / 03:22 pm on
          21 Jul 2023,Friday
        </h3>
        <p className="text-gray-600 dark:text-white">
          India and Sri Lanka exchanged the network-to-network agreement between
          the National Payments Corporation of India and Lanka Pay for UPI
          application acceptance in Sri Lanka. "The agreement...will increase
          fintech connectivity," PM Narendra Modi said in a joint address with
          Sri Lanka President Ranil Wickremesinghe, who is on a visit to India.
          PM Modi called India Sri Lanka's close friend.
        </p>
        <h6 className="text-[12px] dark:text-white">read more at PTI</h6>
      </div>
    </div>
  );
}
