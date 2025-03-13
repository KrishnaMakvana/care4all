-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 13, 2025 at 06:29 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `care4all`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`) VALUES
(1, 'ADMIN ', 'admin@gmail.com', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `childcare`
--

CREATE TABLE `childcare` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `whenNeeded` varchar(50) NOT NULL,
  `careType` varchar(50) NOT NULL,
  `additionalServices` varchar(50) NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `childcare`
--

INSERT INTO `childcare` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `whenNeeded`, `careType`, `additionalServices`, `requested_date`) VALUES
(5, 'krishna Ahir', 'krishna@gmail.com', 'punagam', 395010, 'krishna.jpg', 'In 1-2 months', 'Daycare centers', 'Tutoring', '2025-03-07 13:01:53'),
(6, 'krishna makvana', 'krishna@gmail.com', 'soham rohouse', 395010, 'krishna.jpg', 'Within a week', 'Daycare centers', '', '2025-03-08 02:39:55'),
(7, 'riddhi patel', 'riddhi@gmail.com', 'punagam', 988098, 'pet1.jpg', 'In 1-2 months', 'Daycare centers', 'Tutoring,Senior care', '2025-03-08 03:31:13'),
(8, 'juli savalia', 'juli@gmail.com', 'Mota varachha', 395010, 'juli.jpg', 'Within a week', 'Nannies / recurring sitters', 'Tutoring', '2025-03-12 14:10:54'),
(9, 'juli savalia', 'juli@gmail.com', 'Mota varachha', 345678, 'juli.jpg', 'In 1-2 months', 'Nannies / recurring sitters', 'Tutoring', '2025-03-12 16:11:57');

-- --------------------------------------------------------

--
-- Table structure for table `childjob`
--

CREATE TABLE `childjob` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `experience` varchar(50) NOT NULL,
  `ratings` int(10) NOT NULL,
  `NumberOfChild` int(50) NOT NULL,
  `selectedAges` text NOT NULL,
  `hourlyRate` text NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `childjob`
--

INSERT INTO `childjob` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `experience`, `ratings`, `NumberOfChild`, `selectedAges`, `hourlyRate`, `requested_date`) VALUES
(2, 'krishna Ahir', 'krishna@gmail.com', 'soham rohouse', 879898, 'krishna.jpg', '2 year', 6, 7, '4 - 5 yrs', '40', '2025-03-10 16:47:59'),
(3, 'juli savalia', 'juli@gmail.com', 'Mota varachha', 395010, 'juli.jpg', 'null', 0, 1, '1 - 3 yrs,4 - 5 yrs', '37', '2025-03-12 17:12:17');

-- --------------------------------------------------------

--
-- Table structure for table `hirehousekeeping`
--

CREATE TABLE `hirehousekeeping` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `serviceType` varchar(20) NOT NULL,
  `cleaningFrequency` varchar(50) NOT NULL,
  `startDate` date NOT NULL,
  `budget` bigint(20) NOT NULL,
  `specialInstructions` text NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hirehousekeeping`
--

INSERT INTO `hirehousekeeping` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `serviceType`, `cleaningFrequency`, `startDate`, `budget`, `specialInstructions`, `requested_date`) VALUES
(1, 'Krishna makvana', 'krishna@gmail.com', '34,suman park ,near lila circle,vapi', 123324, 'krishna.jpg', 'regular-maintenance', 'one-time', '2025-04-01', 99, 'no', '2025-03-07 17:22:55');

-- --------------------------------------------------------

--
-- Table structure for table `hirepersonaltutor`
--

CREATE TABLE `hirepersonaltutor` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `subject` varchar(50) NOT NULL,
  `schedule` varchar(50) NOT NULL,
  `startDate` date NOT NULL,
  `budget` bigint(20) NOT NULL,
  `additionalNotes` text NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hirepersonaltutor`
--

INSERT INTO `hirepersonaltutor` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `subject`, `schedule`, `startDate`, `budget`, `additionalNotes`, `requested_date`) VALUES
(1, 'Krishna makvana', 'krishna@gmail.com', '34,suman park ,near lila circle,vapi', 395010, 'krishna.jpg', 'math', 'morning', '2025-04-01', 500, 'no', '2025-03-07 17:36:24'),
(2, 'juli savalia', 'juli@gmail.com', 'Mota varachha', 345678, 'juli.jpg', 'English', 'afternoon', '2025-06-14', 200, 'no', '2025-03-12 17:03:18');

-- --------------------------------------------------------

--
-- Table structure for table `housekeepingjob`
--

CREATE TABLE `housekeepingjob` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `experience` varchar(20) NOT NULL,
  `ratings` varchar(10) NOT NULL,
  `availability` varchar(50) NOT NULL,
  `services` varchar(50) NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `housekeepingjob`
--

INSERT INTO `housekeepingjob` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `experience`, `ratings`, `availability`, `services`, `requested_date`) VALUES
(2, 'krishna makvana', 'krishna@gmail.com', 'soham rohouse', 783628, 'krishna.jpg', '3', '3', 'weekends', 'Deep Cleaning', '2025-03-11 13:56:08');

-- --------------------------------------------------------

--
-- Table structure for table `personaltutorialjob`
--

CREATE TABLE `personaltutorialjob` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `experience` varchar(50) NOT NULL,
  `ratings` int(10) NOT NULL,
  `availability` varchar(50) NOT NULL,
  `subjects` varchar(50) NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personaltutorialjob`
--

INSERT INTO `personaltutorialjob` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `experience`, `ratings`, `availability`, `subjects`, `requested_date`) VALUES
(1, 'krishna makvana', 'krishna@gmail.com', 'soham rohouse', 212322, 'krishna.jpg', '5', 4, 'part-time', 'English,History', '2025-03-11 16:57:16');

-- --------------------------------------------------------

--
-- Table structure for table `petcare`
--

CREATE TABLE `petcare` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `petType` varchar(30) NOT NULL,
  `schedule` varchar(30) NOT NULL,
  `startDate` date NOT NULL,
  `budget` bigint(20) NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `petcare`
--

INSERT INTO `petcare` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `petType`, `schedule`, `startDate`, `budget`, `requested_date`) VALUES
(1, 'Krishna makvana', 'krishna@gmail.com', '34,suman park ,near lila circle,vapi', 739617, 'krishna.jpg', 'dog', 'part-time', '2025-04-11', 200, '2025-03-07 17:06:12');

-- --------------------------------------------------------

--
-- Table structure for table `petjob`
--

CREATE TABLE `petjob` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `experience` varchar(50) NOT NULL,
  `ratings` int(11) NOT NULL,
  `availability` varchar(50) NOT NULL,
  `services` varchar(50) NOT NULL,
  `requested_date` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `petjob`
--

INSERT INTO `petjob` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `experience`, `ratings`, `availability`, `services`, `requested_date`) VALUES
(2, 'krishna Ahir', 'krishna@gmail.com', 'soham rohouse', 234243, 'krishna.jpg', '1', 6, 'nights', 'Vet Visits,Training', '2025-03-10 17:06:04'),
(3, 'juli savalia', 'juli@gmail.com', 'Mota varachha', 395010, 'juli.jpg', '3', 3, 'part-time', 'Dog Walking,Training', '2025-03-12 18:44:49');

-- --------------------------------------------------------

--
-- Table structure for table `physiotherapyjob`
--

CREATE TABLE `physiotherapyjob` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `experience` varchar(50) NOT NULL,
  `ratings` int(10) NOT NULL,
  `availability` varchar(50) NOT NULL,
  `services` varchar(50) NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `physiotherapyjob`
--

INSERT INTO `physiotherapyjob` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `experience`, `ratings`, `availability`, `services`, `requested_date`) VALUES
(1, 'krishna makvana', 'krishna@gmail.com', 'soham rohouse', 980809, 'krishna.jpg', '7', 4, 'weekends', 'Rehabilitation', '2025-03-11 17:23:34');

-- --------------------------------------------------------

--
-- Table structure for table `seniorcare`
--

CREATE TABLE `seniorcare` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `careType` varchar(50) NOT NULL,
  `schedule` varchar(50) NOT NULL,
  `startDate` date NOT NULL,
  `budget` bigint(20) NOT NULL,
  `specialRequirements` text NOT NULL,
  `additionalNotes` text NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seniorcare`
--

INSERT INTO `seniorcare` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `careType`, `schedule`, `startDate`, `budget`, `specialRequirements`, `additionalNotes`, `requested_date`) VALUES
(1, 'krishna Ahir', 'krishna@gmail.com', 'punagam', 879329, 'krishna.jpg', 'personal', 'full-time', '2025-03-28', 300, 'health', 'nooo', '2025-03-07 13:59:30'),
(3, 'juli savalia', 'juli@gmail.com', 'Mota varachha', 848374, 'juli.jpg', 'personal', 'full-time', '2025-11-23', 100, 'specially helth care require', 'noo', '2025-03-12 17:34:13');

-- --------------------------------------------------------

--
-- Table structure for table `seniorjob`
--

CREATE TABLE `seniorjob` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `pincode` int(7) NOT NULL,
  `photo` text NOT NULL,
  `experience` varchar(50) NOT NULL,
  `ratings` int(10) NOT NULL,
  `availability` varchar(50) NOT NULL,
  `services` varchar(50) NOT NULL,
  `requested_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `seniorjob`
--

INSERT INTO `seniorjob` (`id`, `name`, `email`, `address`, `pincode`, `photo`, `experience`, `ratings`, `availability`, `services`, `requested_date`) VALUES
(2, 'krishna makvana', 'krishna@gmail.com', 'soham rohouse', 848374, 'krishna.jpg', '4', 4, 'full-time', 'Companionship,Mobility Assistance', '2025-03-10 13:42:23'),
(3, 'juli savalia', 'juli@gmail.com', 'Mota varachha', 395010, 'juli.jpg', '3', 0, 'part-time', 'Bathing & Grooming', '2025-03-12 18:41:32');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `service_name` varchar(50) NOT NULL,
  `image` text NOT NULL,
  `created_date` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `service_name`, `image`, `created_date`) VALUES
(5, 'Child Care', 'child.png', '24-02-2025'),
(6, 'Senior Care', 'person.png', '24-02-2025'),
(7, 'Pet Care', 'dog-in-front-of-a-man.png', '24-02-2025'),
(8, 'Housekeeping', 'cleaning-service.png', '24-02-2025'),
(11, 'Personal Tutoring', 'books-stack-of-three.png', '24-02-2025'),
(13, 'Physiotherapy', 'working.png', '11-03-2025');

-- --------------------------------------------------------

--
-- Table structure for table `subscribers`
--

CREATE TABLE `subscribers` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `cardNumber` text NOT NULL,
  `expiry` date NOT NULL,
  `cvv` int(5) NOT NULL,
  `amount` text NOT NULL,
  `subscribed_date` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subscribers`
--

INSERT INTO `subscribers` (`id`, `name`, `email`, `cardNumber`, `expiry`, `cvv`, `amount`, `subscribed_date`) VALUES
(3, 'juli savalia', 'juli@gmail.com', '62736528757', '2010-10-28', 323, '₹ 2000', '2025-03-12 18:54:03');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `firstname` varchar(30) NOT NULL,
  `lastname` varchar(30) NOT NULL,
  `email` varchar(50) NOT NULL,
  `contact` bigint(12) NOT NULL,
  `age` int(10) NOT NULL,
  `address` varchar(100) NOT NULL,
  `password` varchar(10) NOT NULL,
  `subscribed` int(11) NOT NULL,
  `registerdate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`firstname`, `lastname`, `email`, `contact`, `age`, `address`, `password`, `subscribed`, `registerdate`) VALUES
('ankita', 'prajapati', 'ankita@gmail.com', 9086658337, 23, 'sillicon', 'an1234', 0, '2025-02-27 12:54:35'),
('jaimini', 'Shyora', 'jamku@gmail.com', 9086659090, 21, 'mahadevchok,motavarachha', 'jamku12', 0, '2025-02-28 13:00:03'),
('juli', 'savalia', 'juli@gmail.com', 6348537654, 20, 'sdvmsjdv', 'juli', 0, '2025-02-17 17:32:36'),
('krishna', 'makvana', 'krishna@gmail.com', 9086659090, 19, '202,soham rohouse,valthan', 'kisu12', 0, '2025-03-06 10:13:55'),
('Riddhi', 'patel', 'riddhi@gmail.com', 9086658337, 21, 'hgj', 'ridh12', 0, '2025-03-08 03:28:53'),
('Ridhdhi', 'patel', 'ridhdhi@gmail.com', 9580975474, 27, 'punagam road surat', 'ridh12', 0, '2025-02-28 13:59:47');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `childcare`
--
ALTER TABLE `childcare`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `childjob`
--
ALTER TABLE `childjob`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hirehousekeeping`
--
ALTER TABLE `hirehousekeeping`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hirepersonaltutor`
--
ALTER TABLE `hirepersonaltutor`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `housekeepingjob`
--
ALTER TABLE `housekeepingjob`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personaltutorialjob`
--
ALTER TABLE `personaltutorialjob`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `petcare`
--
ALTER TABLE `petcare`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `petjob`
--
ALTER TABLE `petjob`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `physiotherapyjob`
--
ALTER TABLE `physiotherapyjob`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seniorcare`
--
ALTER TABLE `seniorcare`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seniorjob`
--
ALTER TABLE `seniorjob`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribers`
--
ALTER TABLE `subscribers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `childcare`
--
ALTER TABLE `childcare`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `childjob`
--
ALTER TABLE `childjob`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `hirehousekeeping`
--
ALTER TABLE `hirehousekeeping`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `hirepersonaltutor`
--
ALTER TABLE `hirepersonaltutor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `housekeepingjob`
--
ALTER TABLE `housekeepingjob`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `personaltutorialjob`
--
ALTER TABLE `personaltutorialjob`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `petcare`
--
ALTER TABLE `petcare`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `petjob`
--
ALTER TABLE `petjob`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `physiotherapyjob`
--
ALTER TABLE `physiotherapyjob`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `seniorcare`
--
ALTER TABLE `seniorcare`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `seniorjob`
--
ALTER TABLE `seniorjob`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `subscribers`
--
ALTER TABLE `subscribers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
