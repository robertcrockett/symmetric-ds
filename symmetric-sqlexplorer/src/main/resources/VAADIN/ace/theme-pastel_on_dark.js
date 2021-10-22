/*
 * Licensed to JumpMind Inc under one or more contributor
 * license agreements.  See the NOTICE file distributed
 * with this work for additional information regarding
 * copyright ownership.  JumpMind Inc licenses this file
 * to you under the GNU General Public License, version 3.0 (GPLv3)
 * (the "License"); you may not use this file except in compliance
 * with the License.
 *
 * You should have received a copy of the GNU General Public License,
 * version 3.0 (GPLv3) along with this library; if not, see
 * <http://www.gnu.org/licenses/>.
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
ace.define("ace/theme/pastel_on_dark",["require","exports","module","ace/lib/dom"],function(e,t,n){t.isDark=!0,t.cssClass="ace-pastel-on-dark",t.cssText=".ace-pastel-on-dark .ace_gutter {background: #353030;color: #8F938F}.ace-pastel-on-dark .ace_print-margin {width: 1px;background: #353030}.ace-pastel-on-dark {background-color: #2C2828;color: #8F938F}.ace-pastel-on-dark .ace_cursor {color: #A7A7A7}.ace-pastel-on-dark .ace_marker-layer .ace_selection {background: rgba(221, 240, 255, 0.20)}.ace-pastel-on-dark.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #2C2828;border-radius: 2px}.ace-pastel-on-dark .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-pastel-on-dark .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid rgba(255, 255, 255, 0.25)}.ace-pastel-on-dark .ace_marker-layer .ace_active-line {background: rgba(255, 255, 255, 0.031)}.ace-pastel-on-dark .ace_gutter-active-line {background-color: rgba(255, 255, 255, 0.031)}.ace-pastel-on-dark .ace_marker-layer .ace_selected-word {border: 1px solid rgba(221, 240, 255, 0.20)}.ace-pastel-on-dark .ace_invisible {color: rgba(255, 255, 255, 0.25)}.ace-pastel-on-dark .ace_keyword,.ace-pastel-on-dark .ace_meta {color: #757aD8}.ace-pastel-on-dark .ace_constant,.ace-pastel-on-dark .ace_constant.ace_character,.ace-pastel-on-dark .ace_constant.ace_character.ace_escape,.ace-pastel-on-dark .ace_constant.ace_other {color: #4FB7C5}.ace-pastel-on-dark .ace_keyword.ace_operator {color: #797878}.ace-pastel-on-dark .ace_constant.ace_character {color: #AFA472}.ace-pastel-on-dark .ace_constant.ace_language {color: #DE8E30}.ace-pastel-on-dark .ace_constant.ace_numeric {color: #CCCCCC}.ace-pastel-on-dark .ace_invalid,.ace-pastel-on-dark .ace_invalid.ace_illegal {color: #F8F8F8;background-color: rgba(86, 45, 86, 0.75)}.ace-pastel-on-dark .ace_invalid.ace_deprecated {text-decoration: underline;font-style: italic;color: #D2A8A1}.ace-pastel-on-dark .ace_fold {background-color: #757aD8;border-color: #8F938F}.ace-pastel-on-dark .ace_support.ace_function {color: #AEB2F8}.ace-pastel-on-dark .ace_string {color: #66A968}.ace-pastel-on-dark .ace_string.ace_regexp {color: #E9C062}.ace-pastel-on-dark .ace_comment {color: #A6C6FF}.ace-pastel-on-dark .ace_variable {color: #BEBF55}.ace-pastel-on-dark .ace_variable.ace_language {color: #C1C144}.ace-pastel-on-dark .ace_xml-pe {color: #494949}.ace-pastel-on-dark .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYIiPj/8PAARgAh2NTMh8AAAAAElFTkSuQmCC) right repeat-y}";var r=e("../lib/dom");r.importCssString(t.cssText,t.cssClass)})