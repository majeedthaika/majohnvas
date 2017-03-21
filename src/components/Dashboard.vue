<template>
  <el-row :gutter="20" class="tac">
  <el-col :span="4" :offset="0">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <br><h1>Member</h1>
      <el-progress type="circle" :percentage="100" >picture</el-progress>
      <br>Profile<br><br>
      <el-input placeholder="Search Course" id="search-box" icon="search" v-model="input2" :on-icon-click="handleIconClick">
</el-input>
      <br><br>
       <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i>Account</template>
        <el-menu-item-group >
          <el-menu-item index="1-1">Manage</el-menu-item>
          <el-menu-item index="1-2">Logout</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3"><i class="el-icon-setting"></i>File</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>Grade</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>Setting</el-menu-item>

      <br><br><br><br><br>
    </el-menu>
  </el-col>

  <el-col :span="7" :offset="0">
    <br><h1 id="dash" style="border-bottom:solid;">DashBoard</h1>
    <el-row>
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 10px;">

       <div class="bottom clearfix">
         <span>ICCS 330</span>
         <span>Object Oriented</span>
         <el-button type="text" class="button">Acive</el-button>
       </div>
     </div>

      </el-card>
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 10px;">

       <div class="bottom clearfix">
         <span>ICCS 342</span>
         <span>Web Application</span>
         <el-button type="text" class="button">Inacive</el-button>
       </div>
     </div>

      </el-card>
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 10px;">

       <div class="bottom clearfix">
         <span>ICCS 202</span>
         <span>Data Structure & Algorithm</span>
         <el-button type="text" class="button">Acive</el-button>
       </div>
     </div>

      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 10px;">

       <div class="bottom clearfix">
         <span>ICSC 302</span>
         <span>Sciene Research</span>
         <el-button type="text" class="button">Acive</el-button>
       </div>
     </div>

      </el-card>



</el-row>
  </el-col>
  <el-col :span="7" :offset="0">
    <br><br><br><br><br>
    <el-row>
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 10px;">

       <div class="bottom clearfix">
         <span>ICCS 330</span>
         <span>Object Oriented</span>
         <el-button type="text" class="button">Acive</el-button>
       </div>
     </div>

      </el-card>
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 10px;">

       <div class="bottom clearfix">
         <span>ICCS 342</span>
         <span>Web Application</span>
         <el-button type="text" class="button">Inacive</el-button>
       </div>
     </div>

      </el-card>
      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 10px;">

       <div class="bottom clearfix">
         <span>ICCS 202</span>
         <span>Data Structure & Algorithm</span>
         <el-button type="text" class="button">Acive</el-button>
       </div>
     </div>

      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 10px;">

       <div class="bottom clearfix">
         <span>ICSC 302</span>
         <span>Sciene Research</span>
         <el-button type="text" class="button">Acive</el-button>
       </div>
     </div>

      </el-card>



</el-row>
  </el-col>
</el-row>
</template>
<script>
export default {
  methods: {
  }
}

</script>
