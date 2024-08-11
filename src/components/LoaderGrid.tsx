function LoaderGrid() {
  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <div className="grid grid-cols-2 gap-1">
        {[2, 3, 1, 2].map((x: any) => (
          <div
            className={`w-4 h-4 bg-gray-300 animate-fadeIn`}
            style={{ animationDuration: `${x}s` }}
          ></div>
        ))}
        {[4, 5, 3, 4].map((x: any) => (
          <div
            className={`w-4 h-4 bg-gray-300 animate-fadeIn`}
            style={{
              animationDuration: `${x}s`,
              transform: 'translateX(1.25rem) translateY(-3.75rem)',
            }}
          ></div>
        ))}
        {[6, 7, 5, 6].map((x: any) => (
          <div
            className={`w-4 h-4 bg-gray-300 animate-fadeIn`}
            style={{
              animationDuration: `${x}s`,
              transform: 'translateX(2.5rem) translateY(-7.5rem)',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default LoaderGrid;
