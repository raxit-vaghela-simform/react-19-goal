export interface Feature {
  id: string;
  title: string;
  navTitle: string;
  description: string;
  detailedDescription: string;
  exampleDescription: string;
  componentPath: string;
  codeSnippet?: string;
}

export const features: Feature[] = [
  {
    id: "use-hook",
    title: "React 19: use() Hook",
    navTitle: "use() Hook",
    description:
      "use() lets a component read a Promise directly so you do not manage loading flags.",
    detailedDescription:
      "The use() hook is a new way to handle async data in React components. Instead of managing loading, errors, and data with useState and useEffect, you call use() with a Promise and React waits for it to resolve. Create the Promise outside the component to keep it stable. React suspends rendering, shows the nearest Suspense fallback, and resumes with the resolved data. If the Promise rejects, the nearest error boundary handles it. This keeps your component focused on rendering the data, not on orchestration code.",
    exampleDescription:
      "This demo fetches a todo item. We create a Promise once, pass it to use(), and render the JSON. There is no manual loading state, no useEffect, and no conditional UI. The component suspends while loading and then shows the data when it arrives.",
    componentPath: "../features/UseHookDemo.tsx",
    codeSnippet:
      'const todoPromise = fetch("https://jsonplaceholder.typicode.com/todos/1").then((r) => r.ok ? r.json() : Promise.reject(new Error("Failed")));\n\nexport default function UseHookDemo() {\n  const data = use(todoPromise);\n  return <pre>{JSON.stringify(data, null, 2)}</pre>;\n}',
  },
  {
    id: "form-actions",
    title: "Form Actions & useActionState",
    navTitle: "Form Actions",
    description:
      "Form actions replace onSubmit and let React manage FormData and pending state.",
    detailedDescription:
      "Form Actions let you provide an action function directly on the form. React gathers FormData, calls your action, and tracks pending for you. useActionState returns [state, formAction, isPending]. state holds the result returned by the action, formAction is passed to the form action prop, and isPending indicates submission in progress. This removes manual preventDefault, manual input collection, and extra state plumbing.",
    exampleDescription:
      "The demo submits a name. React collects FormData, calls submitName, waits briefly, validates the input, and returns a message. The button disables while pending, and the returned message is displayed without custom state handlers.",
    componentPath: "../features/FormActionsDemo.tsx",
    codeSnippet: `const [state, formAction, isPending] = useActionState(
  submitName,
  { message: "", severity: "success" }
);

return (
  <Box component="form" action={formAction}>
    <Stack spacing={2} sx={{ maxWidth: 360 }}>
      <TextField name="name" label="Name" disabled={isPending} />
      <Button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </Button>
    </Stack>
    {state.message && (
      <Alert severity={state.severity}>{state.message}</Alert>
    )}
  </Box>
);`,
  },
  {
    id: "use-optimistic",
    title: "useOptimistic() - Instant UI Updates",
    navTitle: "useOptimistic",
    description:
      "useOptimistic shows an immediate UI result while the real update happens.",
    detailedDescription:
      "useOptimistic lets the UI update instantly while the server confirmation runs in the background. You provide the current value and an updater function. When the user takes an action, you apply an optimistic update right away, then confirm with the real server result. If the server fails, React automatically rolls back to the previous value. This pattern improves perceived performance without losing correctness.",
    exampleDescription:
      "In the demo, clicking Like instantly increases the optimistic count. A fake API call runs in the background, and the real count updates once it completes. If the call failed, React would roll back the optimistic count.",
    componentPath: "../features/UseOptimisticDemo.tsx",
    codeSnippet: `const [likes, setLikes] = useState(0);
const [optimisticLikes, addOptimisticLike] = useOptimistic(
  likes,
  (prev, newLike) => prev + newLike
);

const handleLike = async () => {
  addOptimisticLike(1);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  setLikes((prev) => prev + 1);
};`,

  },
  {
    id: "use-form-status",
    title: "useFormStatus() - Submission State",
    navTitle: "useFormStatus",
    description:
      "useFormStatus shares submission state with child components inside a form.",
    detailedDescription:
      "useFormStatus lets any component inside a form read the current submission state. It returns pending, data, action, and method. This avoids prop drilling for reusable buttons and inputs. The hook only works inside the form subtree, so your components stay decoupled while still reacting to form submission.",
    exampleDescription:
      "The demo places the submit button in its own component. That button calls useFormStatus to disable itself and show a loading label while the email form submits. No props are passed from the parent.",
    componentPath: "../features/UseFormStatusDemo.tsx",
    codeSnippet: `const [state, formAction] = useActionState(submitEmail, { message: "" });

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
}

<Box component="form" action={formAction}>
  <TextField name="email" />
  <SubmitButton />
</Box>;`,

  },
  {
    id: "refs-as-props",
    title: "Refs as Props (no forwardRef)",
    navTitle: "Refs as Props",
    description:
      "Refs can be passed as normal props, no forwardRef needed for simple cases.",
    detailedDescription:
      "React 19 allows refs to be passed like any other prop. This removes the need for forwardRef in simple components. The child receives the ref prop and forwards it to the DOM element. This keeps component APIs straightforward while still enabling focus management and DOM access.",
    exampleDescription:
      "The demo creates inputRef in the parent, passes it to the child input, and focuses it on mount. This works without forwardRef and uses a simple prop name like inputRef.",
    componentPath: "../features/RefsAsPropsDemo.tsx",
    codeSnippet: `const inputRef = useRef<HTMLInputElement | null>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);

<InputField inputRef={inputRef} />;`,

  },
  {
    id: "react-compiler",
    title: "React Compiler - Automatic Optimization",
    navTitle: "React Compiler",
    description:
      "The React Compiler can hoist static JSX and reuse it across renders.",
    detailedDescription:
      "The React Compiler automatically optimizes components by hoisting static JSX and memoizing pure computations. This reduces repeated work during re-renders without requiring manual useMemo or React.memo. It is designed to keep code clean while improving runtime performance.",
    exampleDescription:
      "The demo renders a static list. With the compiler enabled, that list can be created once and reused on every render, so only dynamic parts of the UI do work.",
    componentPath: "../features/ReactCompilerDemo.tsx",
    codeSnippet: `const staticItems = Array.from({ length: 10 }, (_, i) => (
  <Typography key={i}>Static Item {i + 1}</Typography>
));

<Paper variant="outlined">{staticItems}</Paper>;`,

  },
  {
    id: "start-transition",
    title: "startTransition - Non-Blocking Updates",
    navTitle: "startTransition",
    description:
      "startTransition marks updates as low priority so urgent ones stay fast.",
    detailedDescription:
      "startTransition marks state updates as non-urgent. React prioritizes urgent work like typing and clicks, while deferring heavy updates like filtering large lists. This keeps the interface responsive because React can interrupt and resume low-priority work when user input arrives.",
    exampleDescription:
      "The demo filters 10,000 items. Typing updates the input immediately, while the filter update runs inside startTransition so the list updates after React has time.",
    componentPath: "../features/TransitionsDemo.tsx",
    codeSnippet: `const [query, setQuery] = useState("");
const [filter, setFilter] = useState("");

const handleChange = (e) => {
  const value = e.target.value;
  setQuery(value);
  startTransition(() => {
    setFilter(value);
  });
};`,

  },
  {
    id: "use-deferred-value",
    title: "useDeferredValue - Debounced Values",
    navTitle: "useDeferredValue",
    description:
      "useDeferredValue provides a lagging value to keep rendering responsive.",
    detailedDescription:
      "useDeferredValue gives you a delayed version of a value. The original value updates immediately, while the deferred value updates when React has time. This is useful for expensive rendering such as filtering large lists. It feels like debounce, but it is built into React and does not require timers.",
    exampleDescription:
      "The demo renders a large list from deferredText. The input stays responsive because the list updates after React finishes urgent work.",
    componentPath: "../features/UseDeferredValueDemo.tsx",
    codeSnippet: `const [text, setText] = useState("");
const deferredText = useDeferredValue(text);

const items = Array.from({ length: 1000 }, (_, i) => deferredText + " - " + i);`,

  },
  {
    id: "automatic-batching",
    title: "Automatic Batching - Fewer Renders",
    navTitle: "Automatic Batching",
    description:
      "React batches state updates so multiple setState calls render once.",
    detailedDescription:
      "Automatic batching groups multiple state updates into a single render. In React 18 and above, this applies to events, promises, timeouts, and other async boundaries. This reduces unnecessary renders and improves performance without changing application code.",
    exampleDescription:
      "The demo calls setCountA and setCountB in one click handler. React batches those updates and renders once with both new values.",
    componentPath: "../features/AutomaticBatchingDemo.tsx",
    codeSnippet: `const handleClick = () => {
  setCountA((prev) => prev + 1);
  setCountB((prev) => prev + 1);
};`,

  },
  {
    id: "use-id",
    title: "useId - Stable Unique IDs",
    navTitle: "useId",
    description:
      "useId returns stable IDs that work the same on server and client.",
    detailedDescription:
      "useId generates unique, stable IDs that are consistent between server and client rendering. This prevents hydration mismatches and is ideal for accessibility attributes like htmlFor and aria-describedby. You can derive multiple IDs from a single base ID for complex forms.",
    exampleDescription:
      "The demo uses one baseId to create unique IDs for labels and inputs. The IDs stay stable and accessible across renders.",
    componentPath: "../features/UseIdDemo.tsx",
    codeSnippet: `const baseId = useId();

{fields.map((field, index) => {
  const id = baseId + "-" + index;
  return <TextField id={id} label={field.label} />;
})};`,

  },
  {
    id: "use-sync-external-store",
    title: "useSyncExternalStore - External State",
    navTitle: "useSyncExternalStore",
    description:
      "useSyncExternalStore connects React to external stores safely.",
    detailedDescription:
      "useSyncExternalStore is the recommended way to subscribe to external stores such as Redux or custom global state. You provide getSnapshot and subscribe. React ensures the component always sees a consistent snapshot, preventing tearing in concurrent rendering.",
    exampleDescription:
      "The demo implements a small store with subscribe and getSnapshot. Clicking increment updates the store and the component re-renders with the new value.",
    componentPath: "../features/UseSyncExternalStoreDemo.tsx",
    codeSnippet: `const store = createStore(0);

const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

<Button onClick={() => store.increment()}>Increment</Button>;`,

  },
  {
    id: "use-insertion-effect",
    title: "useInsertionEffect - CSS-in-JS Safe Point",
    navTitle: "useInsertionEffect",
    description:
      "useInsertionEffect runs before DOM mutations to insert styles early.",
    detailedDescription:
      "useInsertionEffect runs before DOM mutations and before useLayoutEffect. It is intended for CSS-in-JS libraries to insert styles so layout and paint happen with correct styles. It should not be used for general side effects like data fetching or event listeners.",
    exampleDescription:
      "The demo shows where to add a style tag before the component renders. This avoids a flash of unstyled content and mirrors how CSS-in-JS libraries inject styles.",
    componentPath: "../features/UseInsertionEffectDemo.tsx",
    codeSnippet: `useInsertionEffect(() => {
  console.log("useInsertionEffect: CSS or setup before DOM mutations");
}, []);`,

  },
];
