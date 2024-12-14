import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const TRIGGER_TIMINGS = ['BEFORE', 'AFTER', 'INSTEAD OF'];
const TRIGGER_EVENTS = ['INSERT', 'UPDATE', 'DELETE'];
const OPERATORS = ['less than', 'greater than', 'equal to', 'not equal to'];
export const TriggerForm = () => {
  return (
    <div>
      <h1>Create Trigger</h1>

      <div>
        <div className='flex flex-col space-y-4'>
          <Label htmlFor='name'>Name</Label>
          <Input id='name' name='name' />
        </div>
        <div className='flex flex-col space-y-4'>
          <Label htmlFor='description'>Description</Label>
          <Input id='description' name='description' />
        </div>
        <div className='flex flex-col space-y-4'>
          <Label htmlFor='trigger-table'>Table</Label>
          <Select name='trigger-table'>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select table:' />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>
        <div className='flex flex-col space-y-4'>
          <Label htmlFor='trigger-timing'>Trigger Timing</Label>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Timing' />
            </SelectTrigger>
            <SelectContent>
              {TRIGGER_TIMINGS.map((timing) => (
                <SelectItem key={timing} value={timing}>
                  {timing}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col space-y-4'>
          <Label>Trigger Event</Label>
          {TRIGGER_EVENTS.map((event) => (
            <div key={event} className='flex items-center space-x-4'>
              <input type='checkbox' id={event} name={event} />
              <Label htmlFor={event}>{event}</Label>
            </div>
          ))}
        </div>
        <div className='flex flex-col space-y-4'>
          <Label htmlFor='condition-column'>Condition Column</Label>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select Column:' />
            </SelectTrigger>
            <SelectContent></SelectContent>
          </Select>
        </div>
        <div className='flex flex-col space-y-4'>
          <Label htmlFor='condition-column'>Condition Operator</Label>
          <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='eg. less than' />
            </SelectTrigger>
            <SelectContent>
              {OPERATORS.map((operator) => (
                <SelectItem key={operator} value={operator}>
                  {operator}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className='flex flex-col space-y-4'>
          <Label htmlFor='condition-column'>Condition Value</Label>
          <Input id='condition-value' name='condition-value' />
        </div>
      </div>
    </div>
  );
};
