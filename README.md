# DynamicSize Component

The `DynamicSize` component is a React component that dynamically adjusts the font size based on the screen size. It listens for resize events and updates the font size accordingly. This can be useful in creating responsive web designs where the font size needs to adjust based on the device's screen size.


## Usage

To use the `DynamicSize` component, you can import it into your React component file and use it as a wrapper around the content that you want to dynamically resize. Here's an example of how to use it:

```jsx
import React from 'react';
import DynamicSize from 'dynamic-size';

const MyComponent = () => {
  return (
    <DynamicSize>
      <div>Content goes here</div>
    </DynamicSize>
  );
};

export default MyComponent;
```

In the example above, the `DynamicSize` component is used to wrap the content that needs to have dynamically adjusted font sizes.

## Example

Below is an example of using the `DynamicSize` component within a Next.js project:

```jsx
import React from 'react';
import dynamic from 'next/dynamic';
import DynamicSize from 'dynamic-size';
import Footer from '@/app/components/Footer';
import MailForm from '@/app/components/MailForm';

const DynamicNavbar = dynamic(() => import('@/app/components/NavBar'), {
  ssr: false
});

const Contact = () => {
  return (
    <main className="min-h-screen flex flex-col">
      <DynamicSize>
        <DynamicNavbar />
        <MailForm />
        <div className="flex-grow" />
        <Footer />
      </DynamicSize>
    </main>
  );
};

export default Contact;
```

In this example, the `DynamicSize` component is used to wrap the `DynamicNavbar`, `MailForm`, `Footer`, and other content within the `Contact` component. The font size will adjust dynamically based on the screen size.

## How it Works

The `DynamicSize` component uses the `useEffect` hook to listen for resize events and update the font size accordingly. 

When the component mounts, it calculates the base screen size and base font size. It then defines the `updateFontSize` function, which calculates the new font size based on the current screen size and applies it to the `document.documentElement` element.

The `handleResize` function is called on component mount and every time the window is resized. It checks if the window width is greater than or equal to 768 pixels, and if so, it calls the `updateFontSize` function.

Finally, the `useEffect` hook returns a cleanup function that removes the resize event listener when the component unmounts.

## Configuration

The `DynamicSize` component does not accept any props. However, you can modify the values of `baseScreenSize` and `baseFontSize` directly within the component's code if you want to customize the base values.
