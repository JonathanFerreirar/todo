import { Footer } from "./component/Footer";
import { Navbar } from "./component/Navbar";

import { ListTodo } from "lucide-react";
import { Todo } from "./component/Todo";

function App() {
  return (
    <main className="dark:bg-primary-dark h-screen">
      <Navbar />
      <section className="md:ml-[260px] sm:ml-16 ml-5 flex gap-16 flex-col justify-center h-[80%]">
        <div className="max-w-[226px] flex flex-col gap-3">
          <div className="flex items-center gap-6 animate-spin animate-once animate-duration-[2000ms] animate-delay-[1210ms] animate-ease-out">
            <ListTodo className="text-primary-greyDark w-12 h-11 dark:text-primary-light" />
            <h1 className="text-4xl font-monse font-semibold text-primary-greyDark dark:text-primary-light animate-jump-in animate-once animate-duration-1000 animate-delay-[200ms] animate-ease-out">
              TODO
            </h1>
          </div>
          <h2 className="text-xl text-primary-grey font-lexend font-normal dark:text-primary-light animate-fade-down animate-once animate-duration-1000 animate-ease-out animate-delay-[3210ms]">
            I’m always creating something
          </h2>
          <p className="text-xs text-primary-greyLight font-lexend font-normal dark:text-primary-light animate-fade-down animate-once animate-duration-1000 animate-ease-out animate-delay-[4210ms]">
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

