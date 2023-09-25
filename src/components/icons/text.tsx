import clsx from 'clsx';

export default function TestIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} Instagram`}
      viewBox="0 0 25 25"
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
    >

      <path className="c1" d="M99.51302,117.92154c-9.82063,0-17.81027-7.98965-17.81027-17.81027s7.98965-17.81027,17.81027-17.81027 s17.81027,7.98965,17.81027,17.81027S109.33364,117.92154,99.51302,117.92154z M99.51302,92.96775 c-3.93895,0-7.14352,3.20457-7.14352,7.14352c0,3.93896,3.20457,7.14352,7.14352,7.14352s7.14352-3.20457,7.14352-7.14352 C106.65654,96.17232,103.45197,92.96775,99.51302,92.96775z" transform="translate(344.98175 -117.148987)" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#0f9d58" stroke="#0f9d58"></path>
      <rect x="99.51302" y="82.30099" className="c3" width="18.78424" height="10.66675" transform="translate(344.98175 -117.148987)" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#000000" stroke="#000000"></rect>
      <path className="c1" d="M99.51299,135.19345c-4.38166,0-8.65868-0.79924-12.71175-2.37549l3.86556-9.94136 c5.6312,2.18893,12.0607,2.18988,17.69,0.00095l3.86556,9.94136C108.17025,134.39468,103.89418,135.19345,99.51299,135.19345z" transform="translate(344.98175 -117.148987)" stroke-width="0" stroke-linejoin="miter" stroke-miterlimit="2" fill="#0f9d58" stroke="#0f9d58"></path>
    </svg>
  );
}


