import clsx from 'clsx'

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-label={'Gibify logo'}
      viewBox="0 0 235 64"
      {...props}
      className={clsx('h-5 w-5 fill-black dark:fill-white', props.className)}
    >
      <path d="M38.3869 3.68095C33.479 -1.13321 25.5691 -1.05747 20.7543 3.85124L15.2953 9.41671C15.2856 9.42665 15.275 9.43741 15.2661 9.44734C10.5087 14.3245 10.5173 22.1907 15.4656 27.0493C15.9893 27.5629 16.5571 28.0295 17.1625 28.4436C17.6912 28.805 18.4012 28.7424 18.8496 28.2853L20.5599 26.5415C21.2382 25.85 21.5367 24.9538 21.4959 24.0873C21.486 23.8826 21.4285 23.6829 21.3278 23.5044C21.2271 23.3258 21.0861 23.1732 20.916 23.0588C20.6756 22.8967 20.3675 22.6642 20.061 22.3641C17.736 20.0836 17.6902 16.346 19.9803 14.0113L25.4393 8.44663C27.7333 6.10789 31.5117 6.08534 33.8332 8.4074C36.1319 10.7068 36.096 14.4507 33.8192 16.7718L32.7561 17.8557C32.4027 18.2159 32.2914 18.7453 32.459 19.2213C32.9536 20.627 33.2284 22.085 33.2956 23.5382C33.3483 24.6785 34.7435 25.2015 35.5428 24.3865L38.5571 21.3134C43.3721 16.4056 43.2957 8.49493 38.3869 3.68095Z" />
      <path d="M26.9381 15.3537C31.8863 20.2123 31.895 28.0785 27.1376 32.9556C27.1287 32.9656 27.1181 32.9763 27.1084 32.9863L21.6493 38.5517C16.8345 43.4604 8.9247 43.5362 4.01673 38.722C-0.891987 33.908 -0.968388 25.9973 3.84643 21.0894L6.86075 18.0163C7.6601 17.2014 9.05532 17.7244 9.10801 18.8647C9.1752 20.3179 9.44999 21.7759 9.94462 23.1816C10.1121 23.6576 10.0008 24.187 9.64747 24.5472L8.58434 25.6311C6.30764 27.9522 6.27169 31.6961 8.57038 33.9955C10.8918 36.3176 14.6702 36.295 16.9642 33.9563L22.4233 28.3916C24.7134 26.0569 24.6676 22.3193 22.3426 20.0388C22.0361 19.7387 21.728 19.5062 21.4875 19.3441C21.3174 19.2297 21.1764 19.0771 21.0758 18.8985C20.9751 18.7199 20.9175 18.5203 20.9077 18.3156C20.8669 17.4491 21.1653 16.5529 21.8437 15.8614L23.554 14.1176C24.0025 13.6604 24.7124 13.5979 25.2411 13.9593C25.8465 14.3734 26.4144 14.84 26.9381 15.3537Z" />
    </svg>
  )
}
