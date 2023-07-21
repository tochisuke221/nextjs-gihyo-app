import HomeIcon from '@mui/icons-material/Home'

type HomeIconProps = {
  fontSize?: string
  color?: string
}

const HomeIconComponent = ({ fontSize, color }: HomeIconProps) => {
  return (
    <span style={{ fontSize, color }}>
      <HomeIcon fontSize="inherit" color="inherit" />
    </span>
  );
}

const HomeIcons = () => {
  return (
    <HomeIconComponent />
  );
}

export default HomeIcons;
