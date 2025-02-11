export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="rounded-full h-6 w-6 bg-white animate-ping" />
      <div className="rounded-full h-8 w-8 bg-white animate-ping" />
      <div className="rounded-full h-6 w-6 bg-white animate-ping" />
    </div>
  );
};
