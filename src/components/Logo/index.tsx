import * as S from './styles'
export type LogoProps = {
  color?: 'white' | 'black'
  size?: 'normal' | 'large'
  hideOnMobile?: boolean
}
const Logo = ({
  color = 'white',
  size = 'normal',
  hideOnMobile = false
}: LogoProps) => (
  <S.Wrapper color={color} size={size} hideOnMobile={hideOnMobile}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 750 214"
      aria-label="GeekCrow Games"
    >
      <path
        className="slogan-text"
        // "GMES - GAMES"
        fill="currentColor"
        d="M571.253 185.131c.627-2.47 3.728-4.928 6.993-5.544 2.853-.539 6.155-.234 8.876.821 2.376.92 5.693 3.248 5.647 3.963-.022.331-.709 1.17-1.527 1.863l-1.489 1.262-1.833-1.265c-3.813-2.629-10.424-1.731-11.023 1.498-.316 1.705 1.122 2.741 5.512 3.973 6.811 1.911 10.761 4.438 12.044 7.704 1.351 3.441.125 7.847-2.842 10.216-1.713 1.367-2.306 1.53-5.802 1.592-6.826.123-11.558-1.65-14.756-5.527l-1.283-1.555 2.519-2.593 3.093 1.8c2.552 1.487 3.667 1.839 6.39 2.019 3.488.232 5.235-.36 6.336-2.144 1.484-2.406-.137-3.741-7.249-5.966-7.141-2.234-8.996-3.739-9.625-7.811-.223-1.449-.215-3.386.019-4.306ZM536.806 180.003c4.819-.007 9.428-.034 10.241-.061 2.948-.096 2.958-.083 2.734 3.369-.192 2.94-.29 3.188-1.177 2.961-3.475-.888-13.425-.702-13.864.26-.161.353-.167 1.614-.014 2.804l.279 2.162 6.19.419c3.405.23 6.324.572 6.487.759.164.187.344 1.596.4 3.131.101 2.715.07 2.789-1.108 2.711-.667-.044-1.351-.24-1.521-.435-.34-.392-5.317-.64-8.417-.42l-1.978.141-.31 2.465c-.482 3.835-.311 3.931 7.786 4.385 3.849.216 7.224.555 7.499.753.576.415.351 5.756-.241 5.717-.216-.014-.612-.28-.881-.59-.347-.399-3.1-.568-9.475-.58-7.262-.014-9.052-.144-9.333-.677-.191-.363-.255-2.009-.142-3.659.188-2.745-.201-11.075-.547-11.735-.081-.153-.202-1.844-.27-3.757-.172-4.853-.476-8.328-.813-9.292-.253-.723.737-.821 8.475-.831ZM500.325 179.777l3.196-.074c1.758-.042 3.371-.102 3.584-.135.593-.092.692.797.664 5.919-.027 4.914.183 12.341.543 19.161.115 2.193.161 4.735.101 5.649-.101 1.547-.196 1.633-1.376 1.249-1.848-.601-3.379-2.06-3.672-3.5-.141-.693-.537-4.407-.882-8.255-.427-4.782-.823-7.01-1.252-7.038-.681-.045-3.375 4.102-5.414 8.334-.702 1.457-2.012 3.678-2.911 4.936l-1.634 2.288-.759-1.21a36.712 36.712 0 0 1-1.282-2.233c-3.433-6.712-4.477-8.5-6.021-10.316l-1.802-2.12-.326 8.947c-.405 11.089-1.08 12.607-3.833 8.613-1.19-1.728-1.294-2.34-1.337-7.913-.063-8.232-.672-17.008-1.384-19.969-.325-1.349-.513-2.523-.417-2.607.095-.085 1.747-.193 3.671-.241 3.435-.085 3.511-.061 4.362 1.379.856 1.448 3.706 7.265 5.996 12.238 1.946 4.225 2.26 4.418 4.099 2.507 1.628-1.691 3.143-4.473 6.265-11.507l1.821-4.102ZM379.206 187.644c.884-3.479 4.964-7.06 10.071-8.836 5.294-1.842 11.946-.457 16.152 3.362l1.162 1.055-2.056 1.682c-1.18.967-2.12 1.433-2.207 1.096-.24-.925-3.32-2.264-5.54-2.407-8.003-.52-13.556 6.478-11.352 14.304.68 2.416 1.619 3.627 3.737 4.819 1.994 1.122 7.269 1.613 9.42.876 1.454-.498 2.452-1.886 1.989-2.767-.123-.235-.295-1.058-.383-1.83-.087-.771-.219-1.47-.294-1.553-.074-.083-1.232-.303-2.573-.489-2.398-.332-2.438-.366-2.454-2.071-.009-.953.168-1.976.394-2.272.545-.717 13.237-.646 12.731.071-.469.665-1.232 10.977-.909 12.298.485 1.987-1.245 3.014-6.296 3.733-10.637 1.516-16.63-.756-20.023-7.592-1.236-2.491-2.218-10.924-1.569-13.479Z"
      />
      <path
        className="slogan-text"
        // "A - GAMES"
        fill="currentColor"
        fillRule="evenodd"
        d="m439.964 178.903-3.316-.074-.121 1.853c-.2 3.071-6.175 16.998-7.721 17.997-.561.363-3.807 8.146-3.892 9.334-.064.889-.014.899.905.164.921-.737 1.048-.706 2.371.577 1.51 1.463 2.872 1.825 3.218.854.119-.333.583-1.877 1.031-3.432.447-1.554.959-2.904 1.137-2.999.177-.095 2.941-.363 6.142-.595 6.836-.497 7.617-.183 8.996 3.621.448 1.236 1.101 2.266 1.451 2.289.35.024 1.007.514 1.459 1.091.582.741 1.444 1.089 2.951 1.189 1.171.077 2.136.031 2.145-.105.035-.546-12.752-31.352-13.082-31.515-.197-.097-1.85-.209-3.674-.249Zm4.346 18.273c1.123-.514.989-1.475-.92-6.576-.694-1.853-1.483-3.528-1.753-3.723-.67-.482-5.025 7.626-5.153 9.594-.053.823 6.315 1.398 7.826.705Z"
        clipRule="evenodd"
      />
      <path
        className="slogan-text"
        // "- -"
        fill="#F7608E"
        d="M629.205 193.651c4.004.197 9.745.358 12.758.357 10.417-.004 18.338.548 18.052 1.258-.896 2.224-6.31 3.419-14.961 3.301-2.58-.035-8.403-.057-12.939-.049-9.573.016-11.536-.434-13.5-3.102l-1.304-1.77 2.307-.176c1.268-.098 5.583-.016 9.587.181ZM332.789 193.094c9.184-.025 16.801-.126 16.927-.225.126-.099 1.692-.083 3.481.034 3.427.225 5.058 1.211 4.392 2.655-.41.889-1.009.992-7.834 1.34-12.085.617-32.63-1.071-35.537-2.919-1.185-.754.533-.836 18.571-.885Z"
      />
      <path
        className="slogan-text"
        // "GEEKCROW"
        fill="currentColor"
        d="M662.018 51.632h17.029l7.871 86.394h.322l8.353-86.394h19.278l8.353 86.394h.322l7.871-86.394h15.262L735.273 164.04h-22.009l-8.032-75.795h-.321l-8.033 75.795h-23.454L662.018 51.632ZM627.417 165.646c-8.675 0-15.315-2.462-19.92-7.387-4.606-4.924-6.908-11.883-6.908-20.875V78.289c0-8.993 2.302-15.951 6.908-20.876 4.605-4.924 11.245-7.386 19.92-7.386 8.675 0 15.315 2.462 19.92 7.386 4.605 4.925 6.907 11.883 6.907 20.876v59.095c0 8.992-2.302 15.951-6.907 20.875-4.605 4.925-11.245 7.387-19.92 7.387Zm0-16.058c6.104 0 9.156-3.693 9.156-11.08V77.165c0-7.387-3.052-11.08-9.156-11.08-6.105 0-9.157 3.693-9.157 11.08v61.343c0 7.387 3.052 11.08 9.157 11.08ZM537.082 51.632h26.186c9.103 0 15.743 2.142 19.92 6.424 4.176 4.175 6.265 10.652 6.265 19.43v6.905c0 11.67-3.856 19.056-11.567 22.161v.321c4.284 1.285 7.283 3.907 8.996 7.868 1.821 3.961 2.731 9.261 2.731 15.898v19.752c0 3.211.108 5.834.322 7.868.214 1.927.749 3.854 1.606 5.781h-17.992c-.643-1.82-1.071-3.532-1.285-5.138-.215-1.606-.322-4.497-.322-8.672v-20.554c0-5.139-.856-8.725-2.57-10.759-1.606-2.034-4.444-3.051-8.514-3.051h-6.105v48.174h-17.671V51.632Zm24.097 48.175c3.534 0 6.158-.91 7.872-2.73 1.82-1.82 2.731-4.87 2.731-9.153v-8.671c0-4.069-.75-7.013-2.249-8.832-1.393-1.82-3.642-2.73-6.747-2.73h-8.033v32.116h6.426ZM500.485 165.646c-8.46 0-14.94-2.409-19.438-7.226-4.391-4.818-6.586-11.616-6.586-20.394v-60.38c0-8.778 2.195-15.576 6.586-20.393 4.498-4.818 10.978-7.226 19.438-7.226 8.461 0 14.887 2.408 19.278 7.226 4.498 4.817 6.747 11.615 6.747 20.394V89.53h-16.707V76.523c0-6.959-2.946-10.438-8.836-10.438-5.89 0-8.835 3.48-8.835 10.438v62.788c0 6.851 2.945 10.277 8.835 10.277 5.89 0 8.836-3.426 8.836-10.277v-17.183h16.707v15.898c0 8.778-2.249 15.576-6.747 20.394-4.391 4.817-10.817 7.226-19.278 7.226ZM410.189 52.412h17.671v47.372l22.49-47.372h17.671l-21.044 41.27 21.365 71.138h-18.474l-14.94-50.102-7.068 14.292v35.81h-17.671V52.412ZM351.829 52.412h48.194V68.47H369.5v29.708h24.258v16.058H369.5v34.526h30.523v16.058h-48.194V52.412ZM293.47 52.412h48.193V68.47h-30.522v29.708h24.257v16.058h-24.257v34.526h30.522v16.058H293.47V52.412ZM255.778 165.069c-8.568 0-15.101-2.408-19.599-7.226-4.498-4.924-6.747-11.936-6.747-21.036V77.712c0-9.1 2.249-16.058 6.747-20.875 4.498-4.925 11.031-7.387 19.599-7.387s15.101 2.462 19.599 7.387c4.498 4.817 6.747 11.776 6.747 20.875v9.635h-16.707V76.588c0-7.386-3.052-11.08-9.157-11.08s-9.157 3.694-9.157 11.08v61.504c0 7.279 3.052 10.919 9.157 10.919s9.157-3.64 9.157-10.919v-22h-8.836v-16.059h25.543v65.036h-26.346Z"
      />
      <path
        fill="#222231"
        d="M137.433 53.605c0 20.296-16.474 91.376-36.795 91.376-20.32 0-36.794-71.08-36.794-91.376 0-20.296 16.473-36.749 36.794-36.749 20.321 0 36.795 16.453 36.795 36.749Z"
      />
      <path
        fill="#fff"
        d="M91.501 53.112a8.526 8.526 0 0 1-9.261 7.721c-4.69-.425-11.163-14.262-11.163-14.262s6.473 4.83 11.163 5.255c4.69.425 9.686-3.404 9.261 1.286ZM110.198 53.112a8.527 8.527 0 0 0 9.262 7.721c4.69-.425 11.162-14.262 11.162-14.262s-6.472 4.83-11.162 5.255c-4.69.425-9.687-3.404-9.262 1.286Z"
      />
      <path
        fill="url(#a)"
        d="M96.454 67.022 101 69.47l4.717-2.447-2.535 41.252-1.658 10.225-3.148-10.225-1.923-41.252Z"
      />
      <path
        fill="#222231"
        d="m100.114 4.883-20.538 19.14 49.641 6.642 4.632-11.537-7.953 2.01L136.821.252l-19.14 12.585L119.341.25l-17.567 12.585-1.66-7.953Z"
      />
      <path
        fill="#13131B"
        fillOpacity=".74"
        d="m124.881 26.185.852-4.784-1.867 2.843 1.015 1.941Z"
      />
      <path
        fill="#fff"
        fillOpacity=".15"
        d="m97.492 9.952-9.876 8.914v.612l5.506-3.583 4.37-5.943ZM133.903 19.268l-6.404 2.237-.03.211 3.504-.769 2.93-1.68ZM132.85 4.233l-10.737 7.857-.062.608 5.844-3 4.955-5.465ZM116.894 3.746l-9.876 8.915v.612l5.506-3.584 4.37-5.943Z"
      />
      <path
        fill="#13131B"
        fillOpacity=".74"
        d="m103.872 22.275-1.66-7.516 1.66 3.233v4.283ZM117.681 20.527l.961-8.216-.961.612v7.604Z"
      />
      <path
        fill="#D9D9D9"
        fillOpacity=".08"
        d="M118.555 48.494c-2.384.05-6.031-.962-6.031-.962l15.819-2.36s-5.752 3.237-9.788 3.322ZM83.77 48.144c2.385.05 6.031-.961 6.031-.961l-15.819-2.36s5.753 3.237 9.789 3.321Z"
      />
      <path
        fill="#F3F3F3"
        d="M24.857 77.834c-2.003 4.173-2.614 11.562-2.614 11.562l36.182-23.002-7.947-3.567s-20.603 4.553-25.62 15.007ZM178.867 77.834c2.003 4.173 2.614 11.562 2.614 11.562l-36.183-23.002 7.948-3.567s20.603 4.553 25.621 15.007Z"
      />
      <path
        fill="url(#b)"
        d="M.762 161.701c-1.55-17.402 6.705-44.234 6.705-44.234s6.866-19.938 15.226-30.141l.495-.605c7.966-9.727 13.418-16.384 25.626-20.047 9.718-2.916 16.5-3.61 25.982 0 3.025 1.151 4.947 2.91 6.863 4.663 1.945 1.779 6.966 4.686 6.966 4.686S99.862 118.5 101.523 118.5c1.398 0 11.128-42.476 11.128-42.476s5.679-2.878 7.927-4.68c2.229-1.788 4.461-3.578 7.857-4.67 9.4-3.019 15.755-2.583 25.284 0 13.141 3.564 19.348 10.214 28.077 20.653 8.445 10.1 15.086 30.141 15.086 30.141s9.443 26.79 7.683 44.234c0 0-1.731 15.216-7.683 27.49-3.846 7.93-11.228 14.633-15.086 15.21-9.83 1.471-20.395-15.21-20.395-15.21l-13.777-17.655s-5.424-6.014-9.58-7.699c-2.174-.882-5.595-.506-5.595-.506l-18.783-.739-25.977.103-18.246 1.024c-2.906.33-3.351.306-5.263 1.192-3.417 1.583-6.596 7.035-6.596 7.035l-15.522 18.751a.483.483 0 0 1-.006.009c-2.887 4.068-11.364 14.855-19.363 13.695-9.836-1.426-15.226-15.21-15.226-15.21s-5.155-10.087-6.705-27.49Z"
      />
      <path
        fill="#772F61"
        fillOpacity=".4"
        d="M37.45 196.458s8.128-9.735 13.896-16.868c5.768-7.133 6.61-7.953 9.701-12.41 3.09-4.458-24.209 23.638-33.036 28.142-8.827 4.503-24.209-16.519-24.209-16.519s2.617 12.976 10.4 20.976c1.678 1.724 3.583 2.801 5.769 3.933 2.307 1.194 3.312 1.056 5.942.611 5.063-.856 11.537-7.865 11.537-7.865ZM166.711 196.108c-4.72-5.768-7.516-9.997-13.285-17.13-2.788-3.448-5.114-6.678-7.166-8.914-2.185-2.098-4.02-3.584-4.02-3.584s2.305 1.415 3.758 2.36c12.996 8.458 22.871 22.733 29.782 26.26 8.828 4.503 24.754-15.073 24.754-15.073s-3.059 11.886-11.275 19.577c-1.678 1.725-3.932 3.408-5.418 4.108-2.512 1.182-2.535.902-5.963.389-4.088-.611-10.905-7.672-11.167-7.993Z"
      />
      <path
        fill="#B45884"
        d="M109.389 100.758c-2.698 7.226-7.691 17.741-7.691 17.741l10.924-42.475 3.846-2.097s-1.721 6.84-2.447 10.837c-.699 3.845-2.385 9.975-4.632 15.994Z"
      />
      <path
        fill="#fff"
        fillOpacity=".3"
        d="M50.153 70.236c5.225-1.89 16.468-2.993 12.788 0-3.196 2.598-14.244 6.098-22.93 13.341-8.755 7.3-23.911 33.436-20.496 21.913 1.173-3.957 1.683-6.755 4.062-10.676 2.378-3.921 5.61-9.798 10.789-14.387 5.179-4.59 10.562-8.3 15.787-10.19ZM155.072 70.236c-5.225-1.89-16.468-2.993-12.788 0 3.196 2.598 14.244 6.098 22.931 13.341 8.754 7.3 23.91 33.436 20.495 21.913-1.173-3.957-1.683-6.755-4.062-10.676-2.378-3.921-5.61-9.798-10.789-14.387-5.178-4.59-10.562-8.3-15.787-10.19Z"
      />
      <path
        fill="#F3F3F3"
        d="M59.849 121.363a2 2 0 0 1 2.887 0l4.902 5.113a2 2 0 0 1 .556 1.384v10.939a2 2 0 0 1-2 2H56.39a2 2 0 0 1-2-2V127.86c0-.516.2-1.012.556-1.384l4.902-5.113Z"
      />
      <path
        stroke="#000"
        strokeOpacity=".14"
        d="M63.097 121.017a2.5 2.5 0 0 0-3.61 0l-4.9 5.113a2.499 2.499 0 0 0-.696 1.73v10.939a2.5 2.5 0 0 0 2.5 2.5h9.803a2.5 2.5 0 0 0 2.5-2.5V127.86c0-.645-.25-1.265-.696-1.73l-4.901-5.113Z"
      />
      <path
        fill="#F3F3F3"
        d="M67.77 117.197a2 2 0 0 1 0-3.009l4.915-4.306c.365-.32.833-.496 1.318-.496h10.991a2 2 0 0 1 2 2v8.613a2 2 0 0 1-2 2H74.003c-.485 0-.953-.176-1.318-.496l-4.916-4.306Z"
      />
      <path
        stroke="#000"
        strokeOpacity=".14"
        d="M67.44 113.812a2.5 2.5 0 0 0 0 3.761l4.916 4.306c.456.4 1.04.62 1.647.62h10.991a2.5 2.5 0 0 0 2.5-2.5v-8.613a2.5 2.5 0 0 0-2.5-2.5H74.003c-.606 0-1.192.22-1.647.62l-4.916 4.306Z"
      />
      <path
        fill="#F3F3F3"
        d="M62.736 108.832a2 2 0 0 1-2.887 0l-4.902-5.113a2 2 0 0 1-.556-1.384v-10.94a2 2 0 0 1 2-2h9.803a2 2 0 0 1 2 2v10.94c0 .516-.2 1.012-.557 1.384l-4.901 5.113Z"
      />
      <path
        stroke="#000"
        strokeOpacity=".14"
        d="M59.488 109.178a2.5 2.5 0 0 0 3.609 0l4.901-5.113a2.499 2.499 0 0 0 .696-1.73v-10.94a2.5 2.5 0 0 0-2.5-2.5H56.39a2.5 2.5 0 0 0-2.5 2.5v10.94c0 .645.249 1.265.695 1.73l4.902 5.113Z"
      />
      <path
        fill="#F3F3F3"
        d="M54.577 114.188a2 2 0 0 1 0 3.009l-4.916 4.306c-.364.32-.833.496-1.317.496H37.352a2 2 0 0 1-2-2v-8.613a2 2 0 0 1 2-2h10.992c.484 0 .953.176 1.317.496l4.916 4.306Z"
      />
      <path
        stroke="#000"
        strokeOpacity=".14"
        d="M54.907 117.573a2.5 2.5 0 0 0 0-3.761l-4.916-4.306a2.497 2.497 0 0 0-1.647-.62H37.352a2.5 2.5 0 0 0-2.5 2.5v8.613a2.5 2.5 0 0 0 2.5 2.5h10.992c.606 0 1.191-.22 1.647-.62l4.916-4.306Z"
      />
      <path
        fill="#fff"
        d="M66.584 90.008H55.937a.35.35 0 1 0 0 .699h10.647a.35.35 0 1 0 0-.7ZM48.142 110.371H37.495a.349.349 0 1 0 0 .699h10.648a.35.35 0 1 0 0-.699ZM85.199 110.022H74.552a.35.35 0 1 0 0 .699H85.2a.35.35 0 0 0 0-.699Z"
      />
      <circle
        cx="130.392"
        cy="95.989"
        r="8.645"
        fill="#F3F3F3"
        transform="rotate(5.181 130.392 95.99)"
      />
      <circle
        cx="130.392"
        cy="95.989"
        r="9.145"
        stroke="#000"
        strokeOpacity=".14"
        transform="rotate(5.181 130.392 95.99)"
      />
      <circle
        cx="132.044"
        cy="135.356"
        r="8.645"
        fill="#F3F3F3"
        transform="rotate(5.181 132.044 135.356)"
      />
      <circle
        cx="132.044"
        cy="135.356"
        r="9.145"
        stroke="#000"
        strokeOpacity=".14"
        transform="rotate(5.181 132.044 135.356)"
      />
      <circle
        cx="160.107"
        cy="113.818"
        r="8.645"
        fill="#F3F3F3"
        transform="rotate(5.181 160.107 113.818)"
      />
      <circle
        cx="160.107"
        cy="113.818"
        r="9.145"
        stroke="#000"
        strokeOpacity=".14"
        transform="rotate(5.181 160.107 113.818)"
      />
      <path
        fill="#fff"
        d="M129.305 87.823c-2.249.219-5.157 2.622-5.157 2.622s2.702-1.032 3.933-1.224c1.975-.307 2.3-.248 4.283 0 1.811.227 4.369 1.66 4.369 1.66s-1.853-1.746-3.321-2.36c-1.501-.626-2.488-.856-4.107-.698ZM130.878 127.374c-2.249.22-5.157 2.622-5.157 2.622s2.702-1.032 3.933-1.223c1.975-.307 2.3-.249 4.283 0 1.811.227 4.37 1.66 4.37 1.66s-1.853-1.746-3.321-2.359c-1.502-.628-2.489-.857-4.108-.7ZM158.922 106.306c-2.248.219-5.156 2.621-5.156 2.621s2.702-1.032 3.933-1.223c1.974-.307 2.299-.248 4.282 0 1.812.227 4.37 1.66 4.37 1.66s-1.853-1.746-3.321-2.359c-1.502-.628-2.488-.857-4.108-.699Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1="114.37"
          x2="86.665"
          y1="73.752"
          y2="73.752"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset=".32" stopColor="#1E1E1E" stopOpacity="0" />
          <stop offset=".485" stopColor="#424260" />
          <stop offset=".645" stopColor="#1E1E1E" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="b"
          x1="102.676"
          x2="102.676"
          y1="64.22"
          y2="204.493"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F56161" />
          <stop offset=".425" stopColor="#EE5D89" />
          <stop offset="1" stopColor="#BB4F7E" />
        </linearGradient>
      </defs>
    </svg>
  </S.Wrapper>
)

export default Logo
