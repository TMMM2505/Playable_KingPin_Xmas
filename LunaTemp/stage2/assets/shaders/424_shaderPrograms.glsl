["\n#version 100\n\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _Color;\nattribute highp vec4 in_POSITION0;\nattribute highp vec2 in_TEXCOORD0;\nattribute highp vec4 in_COLOR0;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec4 vs_COLOR0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nmediump vec4 u_xlat16_1;\nmediump vec3 u_xlat16_2;\nbool u_xlatb9;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;\n    u_xlat16_2.xyz = in_COLOR0.xyz / in_COLOR0.www;\n    u_xlat0.xyz = u_xlat16_2.xyz * vec3(0.305306017, 0.305306017, 0.305306017) + vec3(0.682171106, 0.682171106, 0.682171106);\n    u_xlat0.xyz = u_xlat16_2.xyz * u_xlat0.xyz + vec3(0.0125228781, 0.0125228781, 0.0125228781);\n    u_xlat0.xyz = u_xlat0.xyz * u_xlat16_2.xyz;\n    u_xlat16_2.xyz = u_xlat0.xyz * in_COLOR0.www;\n    u_xlat0.xyz = in_COLOR0.xyz * vec3(0.305306017, 0.305306017, 0.305306017) + vec3(0.682171106, 0.682171106, 0.682171106);\n    u_xlat0.xyz = in_COLOR0.xyz * u_xlat0.xyz + vec3(0.0125228781, 0.0125228781, 0.0125228781);\n    u_xlat0.xyz = u_xlat0.xyz * in_COLOR0.xyz;\n    u_xlatb9 = in_COLOR0.w==0.0;\n    u_xlat16_1.xyz = (bool(u_xlatb9)) ? u_xlat0.xyz : u_xlat16_2.xyz;\n    u_xlat0.x = 0.0;\n    u_xlat16_1.w = (u_xlatb9) ? u_xlat0.x : in_COLOR0.w;\n    u_xlat0.xyz = _Color.www * _Color.xyz;\n    u_xlat0.w = _Color.w;\n    vs_COLOR0 = u_xlat0 * u_xlat16_1;\n    return;\n}\n\n","\n#version 100\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tvec4 _Color;\nuniform \tvec4 _Black;\nuniform lowp sampler2D _MainTex;\nvarying highp vec2 vs_TEXCOORD0;\nvarying highp vec4 vs_COLOR0;\n#define SV_Target0 gl_FragData[0]\nvec3 u_xlat0;\nlowp vec4 u_xlat10_0;\nvec3 u_xlat1;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat1.xyz = (-u_xlat10_0.xyz) + vec3(1.0, 1.0, 1.0);\n    u_xlat1.xyz = u_xlat1.xyz * _Black.xyz;\n    u_xlat0.xyz = u_xlat10_0.xyz * vs_COLOR0.xyz;\n    u_xlat0.xyz = u_xlat1.xyz * _Color.www + u_xlat0.xyz;\n    SV_Target0.xyz = u_xlat10_0.www * u_xlat0.xyz;\n    SV_Target0.w = u_xlat10_0.w * vs_COLOR0.w;\n    return;\n}\n\n","\n#version 300 es\n\n#define HLSLCC_ENABLE_UNIFORM_BUFFERS 0\n#if HLSLCC_ENABLE_UNIFORM_BUFFERS\n#define UNITY_UNIFORM\n#else\n#define UNITY_UNIFORM uniform\n#endif\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _Color;\nin highp vec4 in_POSITION0;\nin highp vec2 in_TEXCOORD0;\nin highp vec4 in_COLOR0;\nout highp vec2 vs_TEXCOORD0;\nout highp vec4 vs_COLOR0;\nvec4 u_xlat0;\nvec4 u_xlat1;\nmediump vec4 u_xlat16_1;\nmediump vec3 u_xlat16_2;\nbool u_xlatb9;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy;\n    u_xlat16_2.xyz = in_COLOR0.xyz / in_COLOR0.www;\n    u_xlat0.xyz = u_xlat16_2.xyz * vec3(0.305306017, 0.305306017, 0.305306017) + vec3(0.682171106, 0.682171106, 0.682171106);\n    u_xlat0.xyz = u_xlat16_2.xyz * u_xlat0.xyz + vec3(0.0125228781, 0.0125228781, 0.0125228781);\n    u_xlat0.xyz = u_xlat0.xyz * u_xlat16_2.xyz;\n    u_xlat16_2.xyz = u_xlat0.xyz * in_COLOR0.www;\n    u_xlat0.xyz = in_COLOR0.xyz * vec3(0.305306017, 0.305306017, 0.305306017) + vec3(0.682171106, 0.682171106, 0.682171106);\n    u_xlat0.xyz = in_COLOR0.xyz * u_xlat0.xyz + vec3(0.0125228781, 0.0125228781, 0.0125228781);\n    u_xlat0.xyz = u_xlat0.xyz * in_COLOR0.xyz;\n    u_xlatb9 = in_COLOR0.w==0.0;\n    u_xlat16_1.xyz = (bool(u_xlatb9)) ? u_xlat0.xyz : u_xlat16_2.xyz;\n    u_xlat0.x = 0.0;\n    u_xlat16_1.w = (u_xlatb9) ? u_xlat0.x : in_COLOR0.w;\n    u_xlat0.xyz = _Color.www * _Color.xyz;\n    u_xlat0.w = _Color.w;\n    vs_COLOR0 = u_xlat0 * u_xlat16_1;\n    return;\n}\n\n","\n#version 300 es\n\nprecision highp float;\nprecision highp int;\n#define HLSLCC_ENABLE_UNIFORM_BUFFERS 0\n#if HLSLCC_ENABLE_UNIFORM_BUFFERS\n#define UNITY_UNIFORM\n#else\n#define UNITY_UNIFORM uniform\n#endif\n#define UNITY_SUPPORTS_UNIFORM_LOCATION 0\n#if UNITY_SUPPORTS_UNIFORM_LOCATION\n#define UNITY_LOCATION(x) layout(location = x)\n#define UNITY_BINDING(x) layout(binding = x, std140)\n#else\n#define UNITY_LOCATION(x)\n#define UNITY_BINDING(x) layout(std140)\n#endif\nuniform \tvec4 _Color;\nuniform \tvec4 _Black;\nUNITY_LOCATION(0) uniform mediump sampler2D _MainTex;\nin highp vec2 vs_TEXCOORD0;\nin highp vec4 vs_COLOR0;\nlayout(location = 0) out highp vec4 SV_Target0;\nvec3 u_xlat0;\nmediump vec4 u_xlat16_0;\nvec3 u_xlat1;\nvoid main()\n{\n    u_xlat16_0 = texture(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat1.xyz = (-u_xlat16_0.xyz) + vec3(1.0, 1.0, 1.0);\n    u_xlat1.xyz = u_xlat1.xyz * _Black.xyz;\n    u_xlat0.xyz = u_xlat16_0.xyz * vs_COLOR0.xyz;\n    u_xlat0.xyz = u_xlat1.xyz * _Color.www + u_xlat0.xyz;\n    SV_Target0.xyz = u_xlat16_0.www * u_xlat0.xyz;\n    SV_Target0.w = u_xlat16_0.w * vs_COLOR0.w;\n    return;\n}\n\n"]