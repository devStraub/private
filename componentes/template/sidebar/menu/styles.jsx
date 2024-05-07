export const listItemStyle = (isHovered) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1rem',
    color: isHovered ? 'var(--secondary-color)' : 'inherit',
});

export const iconStyle = (isHovered) => ({
    color: isHovered ? 'inherit' : 'var(--gray-color)',
});  

export default {
    listItemStyle,
    iconStyle,
}