import Button from 'react-bootstrap/Button';

type ButtonProps = {
  children?: React.ReactNode,
  title: string,
  icon?: string,
  onClick?: React.MouseEvent,
  variant?: 'orange' | 'primary' | 'rounded',
}

export default function EButton({title, children, variant}: ButtonProps){
  return(
    <Button variant='primay' style={{margin: '4px', backgroundColor: variant && variant==='orange'? 'var(--orange)' : 'var(--blue)', color:'var(--white)', borderRadius:variant && variant==='rounded'? '25px' : '5px'}}>{children && <span style={{marginRight: '10px'}}>{children}</span>}{title}</Button>
  );
}