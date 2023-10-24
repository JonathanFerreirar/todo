import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";

import { ListTodo } from "lucide-react";
import { Todo } from "./component/Todo";

function App() {
  return (
    <main className="dark:bg-primary-dark h-screen">
      <Navbar />
      <section className="md:ml-[260px] md:mt-[167px] sm:ml-16 ml-5 mt-12 flex gap-16 flex-col">
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
        {/* Component below handle our todos*/}
        <div className="flex flex-col gap-2">
          <Todo>Não é mais self close</Todo>
          <Todo>Não é mais self close 1</Todo>
          <Todo>Não é mais self close 2</Todo>
          <Todo>Não é mais self close 3</Todo>
          <Todo>Não é mais self close 4</Todo>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default App;

