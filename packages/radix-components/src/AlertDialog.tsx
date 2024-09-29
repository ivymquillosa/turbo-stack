"use client"; // This makes the component a client component
  
import {
  AlertDialog as RAAlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogProps,
  AlertDialogPortal,
  AlertDialogOverlay,
} from "@radix-ui/react-alert-dialog"
import { Button } from "./Button";
import { cm } from "@stack/classnames";

export interface IAlertDialogProps extends AlertDialogProps {
  trigger?: string | React.ReactNode
  title?: string
  description?: string
  className?: string
  onActionClick?: React.MouseEventHandler<HTMLButtonElement>
  actionLabel?: string
}

const AlertDialog: React.FC<IAlertDialogProps> = (
  { 
    title='',
    trigger='',
    description='',
    className,
    actionLabel,
    onActionClick,
    ...props
  }) => {

  return (
    <RAAlertDialog {...props}>
      <AlertDialogTrigger asChild className="ring-0 outline-none">
        {typeof(trigger) === 'string' 
          ? <Button variant="outline">{trigger}</Button>
          : trigger
        }
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay />
        <AlertDialogContent className={cm('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg !flex flex-col p-7 bg-white gap-4 justify-center', className)}>
            <div className="flex flex-col space-y-2 text-center sm:text-left space-y-4">
                <AlertDialogTitle className="text-center text-xl">{title || trigger || ''}</AlertDialogTitle>
                <AlertDialogDescription>
                    {description}          
                </AlertDialogDescription>
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
                <AlertDialogCancel 
                    className="p-2 bg-secondary-400 text-white hover:text-white hover:bg-secondary-500">
                    Cancel
                </AlertDialogCancel>
                <AlertDialogAction onClick={onActionClick}
                    className="p-2 bg-danger-500 text-white hover:text-white hover:bg-danger-600">
                    {actionLabel}
                </AlertDialogAction>
            </div>
        </AlertDialogContent>
      </AlertDialogPortal>
    </RAAlertDialog>
  )
}

AlertDialog.displayName = 'AlertDialog'; // Set a display name for better debugging

export default AlertDialog;
