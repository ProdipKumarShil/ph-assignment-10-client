import React from 'react';

const Blog = () => {
  return (
    <div className='max-w-screen-xl mx-auto p-8'>
      <h1 className='mb-8 text-5xl text-center font-semibold'>Blogs</h1>
      <div class="mb-4 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tell us the differences between uncontrolled and controlled components.</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">In the context of software development, the terms "controlled" and "uncontrolled" components refer to two different types of user interface elements.
          Controlled components are those in which the value of the component is managed entirely by the React component's state. When the user interacts with a controlled component, the component's state is updated and the component is re-rendered with the new state value. Examples of controlled components include text input fields and checkboxes.
          In contrast, uncontrolled components are those in which the value of the component is managed entirely by the DOM. When the user interacts with an uncontrolled component, the DOM is updated with the new value, and the component does not know about the new value until it is explicitly queried. Examples of uncontrolled components include form elements with a default value set in the HTML.
          In general, it is recommended to use controlled components wherever possible, as they provide a more predictable and manageable interface. Uncontrolled components are sometimes necessary in situations where a component's value must be managed entirely by the DOM, or where the value of the component is not known until it is first rendered.
        </p>
      </div>

      <div class="mb-4 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">How to validate React props using PropTypes
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">PropTypes is a package that allows you to define the types and shape of the props that are passed to a React component, helping you to validate that they meet certain requirements. Here's how to use PropTypes to validate React props:How to validate React props using PropTypes
        </p>
      </div>

      <div class="mb-4 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tell us the difference between nodejs and express js.</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">Node.js is a server-side JavaScript runtime environment that allows developers to run JavaScript code outside of the web browser, while Express.js is a web framework that runs on top of Node.js and provides a way to easily build web applications.
          Here are some differences between Node.js and Express.js:
          Purpose: Node.js is a JavaScript runtime environment that allows you to run JavaScript code on the server, while Express.js is a web framework that provides a set of tools and features for building web applications.
          Architecture: Node.js provides a low-level, event-driven architecture for building server-side applications, while Express.js provides a higher-level, more opinionated framework that builds on top of Node.js to make it easier to build web applications.
          Routing: Node.js does not provide a built-in routing system for handling HTTP requests, while Express.js provides a powerful and flexible routing system that makes it easy to handle different types of HTTP requests.
          Middleware: Node.js provides some built-in middleware functions for handling HTTP requests and responses, while Express.js provides a much more robust and flexible middleware system that allows you to easily add, remove, and modify middleware functions.
          Templating: Node.js does not provide built-in templating capabilities, while Express.js provides a number of popular templating engines that make it easy to render dynamic content in your web applications.
          In summary, Node.js provides a runtime environment for running JavaScript on the server, while Express.js is a web framework that makes it easier to build web applications by providing a set of tools and features built on top of Node.js.
        </p>
      </div>

      <div class="mb-4 block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is a custom hook, and why will you create a custom hook?
        </h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">A custom hook is a reusable piece of logic that you can extract from a React component and share across multiple components in your application. Custom hooks allow you to abstract away complex logic and provide a simpler interface for your components to use.
          Custom hooks are created by defining a function that starts with the prefix "use" and uses other built-in hooks or custom hooks to provide a new set of functionality. By convention, custom hooks are defined in a separate file and can be shared across multiple components.
          You might want to create a custom hook for several reasons:
          Reusability: If you find yourself repeating the same logic across multiple components, it's a good candidate for a custom hook. By abstracting the logic into a custom hook, you can reuse the logic across different components.
          Abstraction: Custom hooks can provide a simpler and more focused interface to your components, hiding away complex details and reducing the cognitive load of your components.
          Testability: By extracting logic into a custom hook, you can more easily test the logic in isolation, without the need to render a full component.</p>
        This custom hook uses the built-in useState and useEffect hooks to fetch data from an API and returns an object with the fetched data, a loading state, and an error state. This hook can be used in multiple components that need to fetch data from the same API.
      </div>

    </div>
  );
};

export default Blog;