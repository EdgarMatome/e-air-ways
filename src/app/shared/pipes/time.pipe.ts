import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(dateTimeString: string): string {
    // Parse the dateTimeString to get the time
    const dateTime = new Date(dateTimeString);
    // Extract hours and minutes
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();
    // Format the time
    const formattedTime = `${this.padZero(hours)}:${this.padZero(minutes)}`;
    return formattedTime;
  }

  // Helper function to pad single digit numbers with zero
  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }

}
