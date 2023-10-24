export const Todo = ({ children }) => {
  return (
    <div className="pr-5">
      <div className="max-w-[425px] p-2  rounded-[9px]  bg-primary-greyNormal dark:bg-primary-darkTodoBg flex justify-center items-center">
        <p className="text-primary-greyDark dark:text-primary-light font-monse text-base font-medium">
          {children}
        </p>
      </div>
    </div>
  );
};

