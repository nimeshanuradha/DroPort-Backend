-- phpMyAdmin SQL Dump
-- version 4.4.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Aug 19, 2018 at 06:01 AM
-- Server version: 5.6.26
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `droport_new`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE IF NOT EXISTS `admin` (
  `adm_id` int(11) NOT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `nic` varchar(15) NOT NULL,
  `age` int(10) NOT NULL,
  `phone_mobile` int(20) NOT NULL,
  `phone_fix` int(20) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fb_profile_link` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE IF NOT EXISTS `customer` (
  `cus_id` int(11) NOT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `nic` varchar(15) NOT NULL,
  `age` int(10) NOT NULL,
  `phone_mobile` int(20) NOT NULL,
  `phone_fix` int(20) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `fb_profile_link` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`cus_id`, `f_name`, `l_name`, `dob`, `nic`, `age`, `phone_mobile`, `phone_fix`, `gender`, `email`, `fb_profile_link`, `username`, `password`) VALUES
(1000, 'Ravindu', 'Perera', '1995-12-29', '953640465v', 22, 724788122, 112578629, 'male', 'ravinduperera1229@gmail.com', 'https://www.facebook.com/', 'Ravindu', '123'),
(1001, 'Nimesh', 'Anuradha', '1993-03-03', '930911227v', 25, 713462038, 112467461, 'male', 'nimedhanurada1500@gmail.com', '', 'Nimesh', '321'),
(1002, 'Kaushalya', 'Prasadini', '1994-04-30', '941227984v', 24, 766598222, 113556814, 'female', 'kaushalyaprasadini94@gmail.com', '', 'Kaushalya', '456'),
(1003, 'Bhashika', 'Perera', '1994-05-14', '941379195v', 24, 776605869, 0, 'female', 'bhashika94@gmail.com', '', 'Bhashika', '654'),
(1004, 'Prabath', 'Iroshan', '1994-10-10', '943000788v', 23, 716541233, 112222555, 'male', 'prabathirosh@gmail.com', '', 'Prabath', '789'),
(1005, 'Ravindu', 'Lakshitha', '1995-03-24', '950810465v', 23, 765768294, 112578668, 'male', 'ravindulakshithaperera29@gmail.com', 'https://www.facebook.com/', 'Lakshitha', '987'),
(1006, 'Imesha', 'Nimantha', '1994-03-24', '940840355v', 24, 766596565, 112578578, 'male', 'imeshanimantha94@gmail.com', '', 'Imesh', '369');

-- --------------------------------------------------------

--
-- Table structure for table `drone`
--

CREATE TABLE IF NOT EXISTS `drone` (
  `dro_id` int(11) NOT NULL,
  `own_id` int(11) NOT NULL,
  `brand` varchar(45) DEFAULT NULL,
  `model` varchar(45) DEFAULT NULL,
  `weight` int(11) DEFAULT NULL,
  `max_speed` int(11) DEFAULT NULL,
  `max_flight_time` int(11) DEFAULT NULL,
  `extra_battery` int(2) NOT NULL,
  `gps_positioning` binary(1) DEFAULT NULL,
  `vision_system` varchar(50) NOT NULL,
  `altitude_range` varchar(45) DEFAULT NULL,
  `obstacle_sensing_range` varchar(45) DEFAULT NULL,
  `sensor` varchar(50) NOT NULL,
  `video_resolution` varchar(10) NOT NULL,
  `megapixels` int(10) NOT NULL,
  `storage_type` varchar(45) DEFAULT NULL,
  `max_storage_capacity` varchar(45) DEFAULT NULL,
  `supported_os` varchar(45) DEFAULT NULL,
  `frequency` varchar(10) NOT NULL,
  `max_transmission` varchar(45) DEFAULT NULL,
  `battery_capacity` varchar(45) DEFAULT NULL,
  `port` varchar(45) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=1006 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `drone`
--

INSERT INTO `drone` (`dro_id`, `own_id`, `brand`, `model`, `weight`, `max_speed`, `max_flight_time`, `extra_battery`, `gps_positioning`, `vision_system`, `altitude_range`, `obstacle_sensing_range`, `sensor`, `video_resolution`, `megapixels`, `storage_type`, `max_storage_capacity`, `supported_os`, `frequency`, `max_transmission`, `battery_capacity`, `port`) VALUES
(1005, 0, 'DJI', 'penthom 4', 50, 50, 50, 2, NULL, '2', '11', '12', 'no', '480', 50, 'internal', '3GB', 'IOS', '1KHz', '150m', '6000mghz', 'USB');

-- --------------------------------------------------------

--
-- Table structure for table `drone_owner`
--

CREATE TABLE IF NOT EXISTS `drone_owner` (
  `own_id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(10) DEFAULT NULL,
  `nic` varchar(12) DEFAULT NULL,
  `mobile_no` int(11) DEFAULT NULL,
  `fixed_no` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `fb_link` varchar(45) DEFAULT NULL,
  `drn_id` int(11) NOT NULL,
  `no_of_drones` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `reviews` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `drone_pilot`
--

CREATE TABLE IF NOT EXISTS `drone_pilot` (
  `pil_id` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `f_name` varchar(45) DEFAULT NULL,
  `l_name` varchar(45) DEFAULT NULL,
  `dob` date DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `nic` varchar(45) DEFAULT NULL,
  `mobile_no` int(11) DEFAULT NULL,
  `fixed_no` int(11) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `fb_link` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `request`
--

CREATE TABLE IF NOT EXISTS `request` (
  `req_id` int(11) NOT NULL,
  `req_type` varchar(255) NOT NULL,
  `district` varchar(45) DEFAULT NULL,
  `town` varchar(45) DEFAULT NULL,
  `area` varchar(45) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `time_from` time DEFAULT NULL,
  `time_to` time DEFAULT NULL,
  `cus_id` int(11) DEFAULT NULL,
  `map_area` varchar(45) DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `total_fly_time` int(11) DEFAULT NULL,
  `quality_category` varchar(45) DEFAULT NULL,
  `max_flight_time` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `request`
--

INSERT INTO `request` (`req_id`, `req_type`, `district`, `town`, `area`, `date`, `time_from`, `time_to`, `cus_id`, `map_area`, `start_time`, `end_time`, `total_fly_time`, `quality_category`, `max_flight_time`) VALUES
(1, 'Wedding', 'Ampara', 'Piliyandala', 'madapatha', '2018-06-14', '00:00:00', '00:00:00', 45, NULL, NULL, NULL, NULL, NULL, 30),
(2, 'Arial Photo', 'Galle', 'galle', 'unawatuna', '2018-06-14', '00:00:00', '00:00:00', 45, NULL, NULL, NULL, NULL, NULL, 60),
(3, 'Other', 'Anuradhapura', 'Kelaniya', 'kotagedara', '2018-06-22', NULL, '05:05:00', 45, NULL, NULL, NULL, NULL, NULL, 10),
(4, 'Arial Photo', 'Nuwaraeliya', 'akkareipaththu', 'kotagedara', '2018-06-22', NULL, '05:05:00', 45, NULL, NULL, NULL, NULL, NULL, 30),
(6, 'Research', 'Badulla', 'mahawa', 'batakettara', '2018-06-23', NULL, '08:05:00', 45, NULL, NULL, NULL, NULL, NULL, 60),
(7, 'Media', 'Polonnaruwa', 'horowpatahna', 'batana', '2018-06-30', NULL, '08:05:00', 45, NULL, NULL, NULL, NULL, NULL, 60),
(8, 'Arial Photo', 'Matara', 'matara', 'matara', '2018-06-26', '14:02:00', '16:04:00', 45, NULL, NULL, NULL, NULL, NULL, 0),
(9, 'Wedding', 'Anuradhapura', 'Your town', 'dw', '2018-08-09', '14:22:00', '15:33:00', 45, NULL, NULL, NULL, NULL, NULL, 30),
(10, 'Wedding', 'Anuradhapura', 'Your town', 'dw', '2018-08-09', '14:22:00', '15:33:00', 45, NULL, NULL, NULL, NULL, NULL, 30);

-- --------------------------------------------------------

--
-- Table structure for table `req_assigned`
--

CREATE TABLE IF NOT EXISTS `req_assigned` (
  `req_id` int(11) NOT NULL,
  `cus_id` int(11) NOT NULL,
  `own_id` int(11) DEFAULT NULL,
  `pil_id` int(11) DEFAULT NULL,
  `dro_id` int(11) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `req_assigned`
--

INSERT INTO `req_assigned` (`req_id`, `cus_id`, `own_id`, `pil_id`, `dro_id`) VALUES
(1, 45, NULL, NULL, NULL),
(2, 45, NULL, NULL, NULL),
(4, 45, NULL, NULL, NULL),
(6, 45, NULL, NULL, NULL),
(7, 45, NULL, NULL, NULL),
(8, 45, NULL, NULL, NULL),
(9, 45, NULL, NULL, NULL),
(10, 45, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `req_status`
--

CREATE TABLE IF NOT EXISTS `req_status` (
  `req_id` int(11) NOT NULL,
  `drone_recieved` text NOT NULL,
  `media_recieved` text NOT NULL,
  `media_confirmed` text NOT NULL,
  `completed` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `req_status`
--

INSERT INTO `req_status` (`req_id`, `drone_recieved`, `media_recieved`, `media_confirmed`, `completed`) VALUES
(1, 'pending', 'pending', 'pending', 'pending'),
(2, 'pending', 'pending', 'pending', 'pending'),
(4, 'pending', 'pending', 'pending', 'pending'),
(6, 'pending', 'pending', 'pending', 'pending'),
(7, 'pending', 'pending', 'pending', 'pending'),
(8, 'pending', 'pending', 'pending', 'pending'),
(9, 'pending', 'pending', 'pending', 'pending'),
(10, 'pending', 'pending', 'pending', 'pending');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_address`
--

CREATE TABLE IF NOT EXISTS `user_address` (
  `user_id` int(11) NOT NULL,
  `no` varchar(255) NOT NULL,
  `line_1` varchar(255) NOT NULL,
  `line_2` varchar(255) NOT NULL,
  `line_3` varchar(255) NOT NULL,
  `town` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`adm_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`cus_id`);

--
-- Indexes for table `drone`
--
ALTER TABLE `drone`
  ADD PRIMARY KEY (`dro_id`);

--
-- Indexes for table `drone_owner`
--
ALTER TABLE `drone_owner`
  ADD PRIMARY KEY (`own_id`,`drn_id`),
  ADD KEY `FK_Drn_ID` (`drn_id`);

--
-- Indexes for table `drone_pilot`
--
ALTER TABLE `drone_pilot`
  ADD PRIMARY KEY (`pil_id`);

--
-- Indexes for table `request`
--
ALTER TABLE `request`
  ADD PRIMARY KEY (`req_id`),
  ADD KEY `FK_Cus_ID` (`cus_id`);

--
-- Indexes for table `req_assigned`
--
ALTER TABLE `req_assigned`
  ADD PRIMARY KEY (`req_id`,`cus_id`),
  ADD KEY `FK_Drone_ID` (`dro_id`),
  ADD KEY `FK_Pil_ID` (`pil_id`),
  ADD KEY `FK_Cust_ID` (`cus_id`);

--
-- Indexes for table `req_status`
--
ALTER TABLE `req_status`
  ADD PRIMARY KEY (`req_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `user_address`
--
ALTER TABLE `user_address`
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `drone`
--
ALTER TABLE `drone`
  MODIFY `dro_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=1006;
--
-- AUTO_INCREMENT for table `drone_owner`
--
ALTER TABLE `drone_owner`
  MODIFY `own_id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `request`
--
ALTER TABLE `request`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `req_assigned`
--
ALTER TABLE `req_assigned`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT for table `req_status`
--
ALTER TABLE `req_status`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
