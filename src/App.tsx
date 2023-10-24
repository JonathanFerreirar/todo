import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";

import { ListTodo } from "lucide-react";

function App() {
  return (
    <main className="dark:bg-primary-dark h-screen">
      <Navbar />
      <section className="ml-[260px] mt-[167px]">
        <div className="max-w-[226px] flex flex-col gap-3">
          <div className="flex items-center gap-6">
            <ListTodo className="text-primary-greyDark w-12 h-11 dark:text-primary-light" />
            <h1 className="text-4xl font-monse font-semibold text-primary-greyDark dark:text-primary-light">
              TODO
            </h1>
          </div>
          <h2 className="text-xl text-primary-grey font-lexend font-normal dark:text-primary-light ">
            I’m always creating something
          </h2>
          <p className="text-xs text-primary-greyLight font-lexend font-normal dark:text-primary-light">
            This app will improve my skills as a developer
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;

