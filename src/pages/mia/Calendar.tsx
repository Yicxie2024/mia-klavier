import { useState } from 'react'
import { Box, Heading, HStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import type { View } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import MiaNavigation from '../../components/MiaNavigation'
import { LAYOUT } from '../../constants/layout'

const localizer = momentLocalizer(moment)

// 示例事件数据
const events = [
  {
    id: 1,
    title: '钢琴课 - 学生A',
    start: new Date(2024, 11, 10, 10, 0),
    end: new Date(2024, 11, 10, 11, 0),
  },
  {
    id: 2,
    title: '钢琴课 - 学生B',
    start: new Date(2024, 11, 12, 14, 0),
    end: new Date(2024, 11, 12, 15, 0),
  },
  {
    id: 3,
    title: '音乐会排练',
    start: new Date(2024, 11, 15, 16, 0),
    end: new Date(2024, 11, 15, 18, 0),
  },
]

export default function CalendarPage() {
  const { t } = useTranslation()
  const [view, setView] = useState<View>('month')
  const [date, setDate] = useState(new Date())

  const handleViewChange = (newView: View) => {
    setView(newView)
  }

  const handleNavigate = (newDate: Date) => {
    setDate(newDate)
  }

  return (
    <Box
      w={LAYOUT.FULL_WIDTH}
      px={LAYOUT.CONTAINER_PADDING}
      py={LAYOUT.CONTAINER_PADDING}
      bgColor="gray.200"
      minH="100vh"
    >
      <HStack data-component="Calendar-Stack" justifyContent="left" alignItems="flex-start">
        {/* Navigation section */}
        <MiaNavigation />

        {/* Calendar content */}
        <Box width={LAYOUT.CONTENT_WIDTH} marginTop={LAYOUT.NAVIGATION_MARGIN_TOP}>
          <Heading as="h1" size="2xl" mb={4}>
            {t('nav.calendar')}
          </Heading>

          {/* View selector */}
          <Box mb={4}>
            <select
              value={view}
              onChange={e => handleViewChange(e.target.value as View)}
              style={{
                width: '200px',
                padding: '8px',
                backgroundColor: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: '4px',
                fontSize: '14px',
              }}
            >
              <option value="month">月视图</option>
              <option value="week">周视图</option>
              <option value="day">日视图</option>
              <option value="agenda">议程视图</option>
            </select>
          </Box>

          {/* Calendar component */}
          <Box height="600px" bg="white" p={4} borderRadius="md" boxShadow="md">
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              view={view}
              onView={handleViewChange}
              date={date}
              onNavigate={handleNavigate}
              style={{ height: '100%' }}
            />
          </Box>
        </Box>
      </HStack>
    </Box>
  )
}
