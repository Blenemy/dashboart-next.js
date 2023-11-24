/**
 * Renders a button with custom text and optional additional styles.
 *
 * @param {string} text - The text to be displayed inside the button.
 * @param {string} [type="button"] - The type of the button, with a default of "button".
 * @param {string} [classes=""] - Additional CSS classes to apply to the button for custom styling.
 * @param {Object} props - Additional properties to spread onto the button element.
 *
 * @returns {JSX.Element} A styled button element with provided text and styles.
 */

export const Button = ({ text, type = "button", classes = "", ...props }) => {
  return (
    <button
      {...props}
      className={`bg-customViolet py-[14px] leading-5 text-sm font-semibold flex items-center justify-center border-2 border-[#F5F5F529] rounded-lg ${classes}`}
      type={type}
    >
      {text}
    </button>
  );
};
