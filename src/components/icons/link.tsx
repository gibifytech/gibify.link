import clsx from 'clsx';

export default function LinkIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`Gibify logo`}
      viewBox="0 0 24 24"
      {...props}
      className={clsx('h-5 w-5 fill-black dark:fill-white', props.className)}
    >
      <path d="m9.726 5.123 1.228-1.228a6.47 6.47 0 0 1 9.15 9.152l-1.227 1.227m-4.603 4.603-1.228 1.228a6.47 6.47 0 0 1-9.15-9.152l1.227-1.227" />
    </svg>
  );
}