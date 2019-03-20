import mockEvents from '../../../test/__mocks__/mock-events.json';
import mockPosts from '../../../test/__mocks__/mock-posts.json';
import DateFormatterService from './date-formatter-service';

describe('DateFormatterService', () => {

  describe('formatTimestampForEvents', () => {
    it('should test mock events dates are formatted correctly', (done) => {
      const time = mockEvents[0].time;

      expect(DateFormatterService.formatTimestampForEvents(time)).toMatch(/^([0-9]{1}|[0-9]{2})\/([0-9]{1}|[0-9]{2})\/[0-9]{2} ([0-9]{1}|[0-9]{2}):[0-9]{2}(AM|PM)$/);
      
      done();
    });

    it('should test mock events dates are formatted correctly - with leading 0', (done) => {
      const time = mockEvents[5].time;

      expect(DateFormatterService.formatTimestampForEvents(time)).toMatch(/^([0-9]{1}|[0-9]{2})\/([0-9]{1}|[0-9]{2})\/[0-9]{2} ([0-9]{1}|[0-9]{2}):[0-9]{2}(AM|PM)$/);
      
      done();
    });
  });

  describe('formatTimestampForBlogPosts', () => {
    it('should test mock posts dates are formatted correctly', (done) => {
      const time = mockPosts[0].date;

      expect(DateFormatterService.formatTimestampForBlogPost(time)).toBe('11/27/17');
      
      done();
    });

    it('should test mock posts dates are formatted correctly - with leading 0', (done) => {
      const time = mockPosts[2].date;

      expect(DateFormatterService.formatTimestampForBlogPost(time)).toBe('08/04/17');
      
      done();
    });
  });

});