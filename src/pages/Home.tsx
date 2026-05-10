const Home = () => {
  return (
    <div className="h-[calc(100dvh-53px)] justify-center max-w-6xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 justify-center gap-16 items-center">
        <div className="space-y-6 justify-center">
          <div
            className="inline-flex items-center rounded-full border px-3 py-1 text-sm text-gray-600">
            Open Source Toolkit
          </div>

          <h1 className="text-5xl font-bold tracking-tight leading-tight">
            Generate community documents in seconds
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Simple tools for creating github document files,
            and other open-source project essentials with a clean developer
            experience.
          </p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gray-200 rounded-3xl blur-3xl opacity-40"/>

          <img
            src={`${import.meta.env.BASE_URL}/favicon.png`}
            alt="Developer workspace"
            className="relative rounded-3xl  object-cover w-full h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
