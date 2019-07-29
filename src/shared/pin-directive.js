// automatically binds to bind and update lifecycle hooks
export default function (element, binding) {
  Object.keys(binding.value).forEach(position => {
    element.style[position] = binding.value[position];
  });
  element.style.position = "absolute";
}
